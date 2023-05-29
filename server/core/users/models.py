from django.contrib.auth.models import AbstractUser, User
from django.utils import timezone
import random

from django.core.validators import RegexValidator
from django.db import models


class CustomUser(AbstractUser):
    last_name = models.CharField(verbose_name="Фамилия", max_length=150, blank=False, null=False)
    first_name = models.CharField(verbose_name="Имя", max_length=150, blank=False, null=False)
    patronymic = models.CharField(verbose_name="Отчество", max_length=150, blank=False, null=False)
    fio = models.CharField(verbose_name='ФИО', max_length=255, default='', blank=True)
    avatar_url = models.ImageField(verbose_name='URL аватара', upload_to="users/files/%Y/%m/%d", blank=True, null=True)
    position = models.CharField(verbose_name="Должность", max_length=150, blank=False, null=False)
    wos_id = models.PositiveIntegerField(verbose_name='Идентификатор в Web of Science', blank=True, default='1')
    scorpus_auth_id = models.PositiveIntegerField(verbose_name='Идентификатор в SCORPUS', blank=True, default='1')
    orcid = models.PositiveIntegerField(verbose_name='Идентификатор ORCID', blank=True, default='1')
    spin_kod = models.PositiveIntegerField(verbose_name='SPIN-код', blank=True, default='1')
    rinc_auth_id = models.PositiveIntegerField(verbose_name='Идентификатор в РИНЦ', blank=True, default='1')

    def __str__(self):
        return self.username


class RegistrationCode(models.Model):
    code = models.CharField(
        max_length=16,
        unique=True,
        validators=[
            RegexValidator(
                regex=r'^[a-zA-Z0-9]{16}$',
                message='Code should be 16 alphanumeric characters long',
                code='invalid_code'
            )
        ]
    )
    email = models.EmailField()
    created_at = models.DateTimeField(default=timezone.now)
    expires_at = models.DateTimeField()

    def is_valid(self):
        return self.expires_at > timezone.now()

    def save(self, *args, **kwargs):
        if not self.pk:
            self.code = ''.join(random.choices('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789', k=16))
            self.expires_at = timezone.now() + timezone.timedelta(days=30)
        super().save(*args, **kwargs)

    def __str__(self):
        return f'{self.email} - {self.code}'

    def create_new_user_with_code(self, email, password, username):
        # Create a new user with the given email and password
        user = CustomUser.objects.create_user(email=email, password=password, username=username)

        # Associate the user with the registration code
        user.registration_code = self
        user.save()
        self.delete()
        return user

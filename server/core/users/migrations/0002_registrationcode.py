# Generated by Django 4.1.3 on 2023-03-27 12:06

import datetime
import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='RegistrationCode',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('code', models.CharField(max_length=16, unique=True, validators=[django.core.validators.RegexValidator(code='invalid_code', message='Code should be 16 alphanumeric characters long', regex='^[a-zA-Z0-9]{16}$')])),
                ('email', models.EmailField(max_length=254)),
                ('created_at', models.DateTimeField(default=datetime.datetime(2023, 3, 27, 12, 6, 9, 246031, tzinfo=datetime.timezone.utc))),
                ('expires_at', models.DateTimeField()),
            ],
        ),
    ]
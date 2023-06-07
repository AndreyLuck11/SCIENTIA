from rest_framework import serializers

from publications.models import Publication
from users.models import CustomUser
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer



class UserPublicationSerializer(serializers.ModelSerializer):
    class Meta:
        ref_name = "User 1"
        model = Publication
        fields = ('id', 'title')


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        ref_name = "User 1"
        model = CustomUser
        fields = (
            'id', 'last_name', 'first_name', 'patronymic', 'fio', 'email', 'username', 'avatar_url', "position",
            'wos_id',
            'scorpus_auth_id', 'orcid', 'spin_kod', 'rinc_auth_id')


class UsersListSerializer(serializers.ModelSerializer):
    class Meta:
        ref_name = "User 1"
        model = CustomUser
        fields = ('id', 'last_name', 'first_name', 'patronymic', 'fio', 'avatar_url', "position")


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def get_token(cls, user):
        token = super().get_token(user)

        # Добавьте сюда любую информацию, которую вы хотите включить в токен
        token['username'] = user.username
        token['email'] = user.email
        token['last_name'] = user.last_name
        token['first_name'] = user.first_name
        token['patronymic'] = user.patronymic
        token['avatar_url'] = str(user.avatar_url)

        return token

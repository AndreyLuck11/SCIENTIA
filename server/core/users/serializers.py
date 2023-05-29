from rest_framework import serializers

from publications.models import Publication
from users.models import CustomUser


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

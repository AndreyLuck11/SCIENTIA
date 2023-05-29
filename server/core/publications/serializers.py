from abc import ABC

from rest_framework import serializers
from django.utils.translation import gettext_lazy as _
from django.db.models.options import FieldDoesNotExist
from publications.models import Publication, Category
from users.models import CustomUser


class PublicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Publication
        fields = '__all__'


class PublicationUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('id', 'fio', 'avatar_url')


class PublicationListSerializer(serializers.ModelSerializer):
    authors = PublicationUserSerializer(read_only=True, many=True)
    cat = serializers.SlugRelatedField(
        many=False,
        read_only=True,
        slug_field='name'
    )

    class Meta:
        model = Publication
        fields = ('id', 'authors', 'title', 'publication_year', 'cat')


class PublicationDetailSerializer(serializers.ModelSerializer):
    authors = PublicationUserSerializer(read_only=True, many=True)
    cat = serializers.SlugRelatedField(
        many=False,
        read_only=True,
        slug_field='name'
    )

    class Meta:
        model = Publication
        fields = '__all__'

    def to_representation(self, instance):
        ret = super().to_representation(instance)
        info = serializers.ModelSerializer.serializer_field_mapping

        for field_name in ret:
            try:
                field = self.Meta.model._meta.get_field(field_name)
                if hasattr(field, 'verbose_name'):
                    ret[field_name] = {
                        'value': ret[field_name],
                        'verbose_name': _(field.verbose_name)
                    }
                else:
                    ret[field_name] = {
                        'value': ret[field_name]
                    }
            except FieldDoesNotExist:
                ret[field_name] = {
                    'value': ret[field_name]
                }

        return ret


class FiltersInfoSerializer(serializers.Serializer):
    filter_name = serializers.CharField()
    filter_type = serializers.CharField()
    filter_client_name = serializers.CharField()


class CategoriesListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('id', 'name')

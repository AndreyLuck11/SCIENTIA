from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.response import Response
from rest_framework import viewsets, generics

from publications.models import Publication, Category
from publications.serializers import (PublicationSerializer,
                                      PublicationListSerializer,
                                      PublicationDetailSerializer, CategoriesListSerializer)
from publications.filters import PublicationFilter
from publications.serializers import FiltersInfoSerializer
from publications.filters_info import get_filters_info
from drf_yasg.utils import swagger_auto_schema
from drf_yasg import openapi
from rest_framework.decorators import action


class PublicationsViewSet(viewsets.ModelViewSet):
    serializer_classes = {
        'list': PublicationListSerializer,
        'retrieve': PublicationDetailSerializer,
    }
    default_serializer_class = PublicationSerializer
    queryset = Publication.objects.all().order_by('-time_create')
    filter_backends = (DjangoFilterBackend,)
    filterset_class = PublicationFilter

    def get_serializer_class(self):
        return self.serializer_classes.get(self.action, self.default_serializer_class)

    @swagger_auto_schema(
        manual_parameters=[
            openapi.Parameter(
                name='title_logic',
                in_=openapi.IN_QUERY,
                description='Логика фильтрации для title: "and" или "or"',
                type=openapi.TYPE_STRING,
            ),
            openapi.Parameter(
                name='keywords_logic',
                in_=openapi.IN_QUERY,
                description='Логика фильтрации для keywords: "and" или "or"',
                type=openapi.TYPE_STRING,
            ),
        ]
    )
    def list(self, request, *args, **kwargs):
        return super().list(request, *args, **kwargs)

    def get_queryset(self):
        title_logic = self.request.query_params.get('title_logic', 'and')
        keywords_logic = self.request.query_params.get('keywords_logic', 'and')
        # Примените логику фильтрации, используя значения title_logic и keywords_logic
        queryset = super().get_queryset()
        # ...
        return queryset


class FiltersInfoView(generics.GenericAPIView):
    serializer_class = FiltersInfoSerializer

    def get(self, request, *args, **kwargs):
        filters_info = get_filters_info()
        serializer = self.get_serializer(filters_info, many=True)
        return Response(serializer.data)


class CategoriesViewSet(viewsets.ModelViewSet):
    serializer_class = CategoriesListSerializer
    queryset = Category.objects.all()

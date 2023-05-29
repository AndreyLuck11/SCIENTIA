import django_filters
from .models import Publication
from django.db.models import Q
from django_filters import CharFilter, NumberFilter, BaseInFilter


class NumberInFilter(BaseInFilter, NumberFilter):
    pass


class CustomCharFilter(CharFilter):
    def __init__(self, *args, **kwargs):
        self.field_name = kwargs.pop("field_name", None)
        super().__init__(*args, **kwargs)

    def filter(self, qs, value):
        if value:
            value_list = [int(x) for x in value.split(',') if x.strip()]
            if self.field_name == 'authors__id':
                return qs.filter(authors__id__in=value_list)
        return qs


class PublicationFilter(django_filters.FilterSet):
    title = CustomCharFilter(method='filter_title')
    keywords = CustomCharFilter(method='filter_keywords')
    publication_year = CustomCharFilter(method='filter_publication_year')
    cat = CustomCharFilter(method='filter_cat')
    authors = django_filters.BaseInFilter(field_name='authors__id')
    WoS_CC = django_filters.BooleanFilter(method='filter_by_boolean_fields')
    Scopus = django_filters.BooleanFilter(method='filter_by_boolean_fields')
    RINC = django_filters.BooleanFilter(method='filter_by_boolean_fields')

    class Meta:
        model = Publication
        fields = [
            'title', 'keywords', 'publication_year', 'cat', 'authors',
            'WoS_CC', 'Scopus', 'RINC'
        ]

    def filter_by_boolean_fields(self, queryset, name, value):
        lookup = f'{name}__exact'
        return queryset.filter(**{lookup: value})

    def filter_title(self, queryset, name, value):
        return self.filter_using_logic(queryset, 'title', value)

    def filter_keywords(self, queryset, name, value):
        return self.filter_using_logic(queryset, 'keywords', value)

    def filter_publication_year(self, queryset, name, value):
        return self.filter_using_logic(queryset, 'publication_year', value, exact=True)

    def filter_cat(self, queryset, name, value):
        if value:
            cat_ids = [int(cat_id) for cat_id in value.split(',') if cat_id]
            return queryset.filter(cat__id__in=cat_ids)
        return queryset

    def filter_by_boolean_fields(self, queryset, name, value):
        if name == 'WoS_CC':
            lookup = 'WoS_CC__exact'
        elif name == 'Scopus':
            lookup = 'scopus__exact'
        elif name == 'RINC':
            lookup = 'RINC__exact'
        else:
            raise ValueError(f"Unknown boolean field: {name}")

        return queryset.filter(**{lookup: value})

    def filter_using_logic(self, queryset, field, value, exact=False):
        if value:
            logic_ids = [logic_id.strip() for logic_id in value.split(',') if logic_id.strip()]
            logic = self.request.GET.get(f'{field}_logic', 'or')

            if exact:
                filter_expr = f'{field}__exact'
            else:
                filter_expr = f'{field}__icontains'

            if logic == 'and':
                for word in logic_ids:
                    queryset = queryset.filter(**{filter_expr: word})
            else:
                query = Q(**{filter_expr: logic_ids[0]})

                for word in logic_ids[1:]:
                    query |= Q(**{filter_expr: word})

                queryset = queryset.filter(query)

        return queryset

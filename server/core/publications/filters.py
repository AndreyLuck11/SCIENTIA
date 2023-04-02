import django_filters
from .models import Publication
from urllib.parse import unquote
from django.db.models import Q
from django_filters import CharFilter


class CustomCharFilter(CharFilter):
    def filter(self, qs, value):
        if value:
            value = ','.join([x.strip() for x in value.split(',') if x.strip()])
        return super().filter(qs, value)

class PublicationFilter(django_filters.FilterSet):
    title = CustomCharFilter(method='filter_title')
    keywords = CustomCharFilter(method='filter_keywords')
    publication_year = CustomCharFilter(method='filter_publication_year')
    cat = CustomCharFilter(method='filter_cat')
    authors = CustomCharFilter(field_name='authors__id')
    isWoS_CC = django_filters.BooleanFilter(field_name='WoS_CC')
    isScopus = django_filters.BooleanFilter(field_name='scopus')
    isRINC = django_filters.BooleanFilter(field_name='RINC')

    class Meta:
        model = Publication
        fields = ['title', 'keywords', 'publication_year', 'cat', 'authors', 'isWoS_CC', 'isScopus', 'isRINC']

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

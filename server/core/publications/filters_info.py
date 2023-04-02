from publications.filters import PublicationFilter, CustomCharFilter
from publications.models import Publication
from django.core.exceptions import FieldDoesNotExist


def get_filters_info():
    filters_info = []

    for filter_name, filter_obj in PublicationFilter.base_filters.items():
        filter_type = filter_obj.__class__.__name__

        # Check if the filter is a custom filter and get its related field name
        related_field_name = filter_name
        if isinstance(filter_obj, CustomCharFilter):
            related_field_name = filter_obj.field_name

        try:
            field = Publication._meta.get_field(related_field_name)
            verbose_name = field.verbose_name
        except FieldDoesNotExist:
            verbose_name = related_field_name

        filters_info.append({
            'filter_name': filter_name,
            'filter_type': filter_type,
            'filter_client_name': verbose_name
        })

    return filters_info
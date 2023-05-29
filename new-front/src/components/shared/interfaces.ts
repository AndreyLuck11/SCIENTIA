export type PublicationsList = Publication[]

export interface UserListItem {
    id: number;
    last_name: string;
    first_name: string;
    patronymic: string;
    fio: string;
    email: string;
    username: string;
    avatar_url: string | null;
}

export interface MultSelectFilterOption {
    label: string;
    value: any;
}

export interface Filter {
    filter_name: string;
    filter_type: "CustomCharFilter" | 'NumberFilter' | 'BooleanFilter';
    filter_client_name: string;
}

export interface Publication {
    id: number
    authors: Author[]
    title: string
    publication_year: string
    cat: string
}

export interface Author {
    id: number;
    last_name: string;
    first_name: string;
    patronymic: string;
    fio: string;
    email: string;
    username: string;
    avatar_url: string;
}

export interface AuthorDetail {
    id: number;
    last_name: string;
    first_name: string;
    patronymic: string;
    fio: string;
    email: string;
    username: string;
    avatar_url: string | null;
    position: string;
    wos_id: number | string;
    scorpus_auth_id: number | string;
    orcid: number | string;
    spin_kod: number | string;
    rinc_auth_id: number | string;
}

export interface PublicationDetail {
    id: {
        value: number;
        verbose_name: string;
    };
    authors: {
        value: Author[];
        verbose_name: string;
    };
    cat: {
        value: string;
        verbose_name: string;
    };
    title: {
        value: string;
        verbose_name: string;
    };
    sources: {
        value: string;
        verbose_name: string;
    };
    abstract: {
        value: string;
        verbose_name: string;
    };
    publication_year: {
        value: string;
        verbose_name: string;
    };
    keywords: {
        value: string;
        verbose_name: string;
    };
    output_data: {
        value: string;
        verbose_name: string;
    };
    number: {
        value: string;
        verbose_name: string;
    };
    tome: {
        value: string;
        verbose_name: string;
    };
    issue_number: {
        value: string;
        verbose_name: string;
    };
    pages: {
        value: string;
        verbose_name: string;
    };
    details_of_documents: {
        value: string;
        verbose_name: string;
    };
    udk: {
        value: string;
        verbose_name: string;
    };
    publication_date: {
        value: string;
        verbose_name: string;
    };
    description: {
        value: string;
        verbose_name: string;
    };
    time_create: {
        value: string;
        verbose_name: string;
    };
    time_update: {
        value: string;
        verbose_name: string;
    };
    file_url: {
        value: string | null;
        verbose_name: string;
    };
    WoS_CC: {
        value: boolean;
        verbose_name: string;
    };
    scopus: {
        value: boolean;
        verbose_name: string;
    };
    RINC: {
        value: boolean;
        verbose_name: string;
    };
    elib_ID: {
        value: number;
        verbose_name: string;
    };
    if_index_export: {
        value: string;
        verbose_name: string;
    };
    date_publ: {
        value: string;
        verbose_name: string;
    };
    DOI: {
        value: string;
        verbose_name: string;
    };
    ISSN: {
        value: string;
        verbose_name: string;
    };
    e_ISSN: {
        value: string;
        verbose_name: string;
    };
    ISBN: {
        value: string;
        verbose_name: string;
    };
    qwart_izd: {
        value: string;
        verbose_name: string;
    };
    affil: {
        value: string;
        verbose_name: string;
    };
    finans: {
        value: string;
        verbose_name: string;
    };
    publ_type: {
        value: string;
        verbose_name: string;
    };
}

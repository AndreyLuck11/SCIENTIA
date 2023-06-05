import React from "react";
import { useFormik } from 'formik';
import styles from "./CreatePublicationPage.module.scss"

const initialValues = {
    title: '',
    sources: '',
    abstract: '',
    cat: '',
    publication_year: '',
    keywords: '',
    output_data: '',
    number: '',
    tome: '',
    issue_number: '',
    pages: '',
    details_of_documents: '',
    udk: '',
    publication_date: '',
    description: '',
    file_url: '',
    authors: [],
    WoS_CC: false,
    scopus: false,
    RINC: false,
    elib_ID: '',
    if_index_export: '',
    date_publ: '',
    DOI: '',
    ISSN: '',
    e_ISSN: '',
    ISBN: '',
    qwart_izd: '',
    affil: '',
    finans: '',
    publ_type: '',
};

function CreatePublicationPage() {

    const formik = useFormik({
        initialValues,
        onSubmit: (values) => {
            // Здесь можно добавить логику отправки формы
            console.log(values);
        },
    });
    
    return (
        <div className="container">
            <div className={styles.CreatePublicationPage}>
                <form onSubmit={formik.handleSubmit}>
                    <div className={styles.FormField}>
                        <label htmlFor="title">Название</label>
                        <input
                            id="title"
                            name="title"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.title}
                        />
                    </div>

                    <div className={styles.FormField}>
                        <label htmlFor="sources">Источники</label>
                        <input
                            id="sources"
                            name="sources"
                            onChange={formik.handleChange}
                            value={formik.values.sources}
                        />
                    </div>

                    <div className={styles.FormField}>
                        <label htmlFor="abstract">Аннотация</label>
                        <input
                            id="abstract"
                            name="abstract"
                            onChange={formik.handleChange}
                            value={formik.values.abstract}
                        />
                    </div>

                    <div className={styles.FormField}>
                        <label htmlFor="cat">Категория</label>
                        <input
                            id="cat"
                            name="cat"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.cat}
                        />
                    </div>

                    <div className={styles.FormField}>
                        <label htmlFor="publication_year">Год публикации</label>
                        <input
                            id="publication_year"
                            name="publication_year"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.publication_year}
                        />
                    </div>

                    <div className={styles.FormField}>
                        <label htmlFor="keywords">Ключевые слова</label>
                        <input
                            id="keywords"
                            name="keywords"
                            onChange={formik.handleChange}
                            value={formik.values.keywords}
                        />
                    </div>

                    <div className={styles.FormField}>
                        <label htmlFor="output_data">Выходные данные</label>
                        <input
                            id="output_data"
                            name="output_data"
                            onChange={formik.handleChange}
                            value={formik.values.output_data}
                        />
                    </div>

                    <div className={styles.FormField}>
                        <label htmlFor="number">Номер публикации</label>
                        <input
                            id="number"
                            name="number"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.number}
                        />
                    </div>

                    <div className={styles.FormField}>
                        <label htmlFor="tome">Том</label>
                        <input
                            id="tome"
                            name="tome"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.tome}
                        />
                    </div>

                    <div className={styles.FormField}>
                        <label htmlFor="issue_number">Номер выпуска</label>
                        <input
                            id="issue_number"
                            name="issue_number"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.issue_number}
                        />
                    </div>

                    <div className={styles.FormField}>
                        <label htmlFor="pages">Количество страниц</label>
                        <input
                            id="pages"
                            name="pages"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.pages}
                        />
                    </div>

                    <div className={styles.FormField}>
                        <label htmlFor="details_of_documents">Реквизиты документа о регистрации исключительных прав</label>
                        <input
                            id="details_of_documents"
                            name="details_of_documents"
                            onChange={formik.handleChange}
                            value={formik.values.details_of_documents}
                        />
                    </div>

                    <div className={styles.FormField}>
                        <label htmlFor="udk">УДК</label>
                        <input
                            id="udk"
                            name="udk"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.udk}
                        />
                    </div>

                    <div className={styles.FormField}>
                        <label htmlFor="publication_date">Дата поступления публикации в издательство</label>
                        <input
                            id="publication_date"
                            name="publication_date"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.publication_date}
                        />
                    </div>

                    <div className={styles.FormField}>
                        <label htmlFor="description">Описание</label>
                        <input
                            id="description"
                            name="description"
                            onChange={formik.handleChange}
                            value={formik.values.description}
                        />
                    </div>

                    <div className={styles.FormField}>
                        <label htmlFor="file_url">Адрес полнотекстовой электронной версии публикации (URL)</label>
                        <input
                            id="file_url"
                            name="file_url"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.file_url}
                        />
                    </div>

                    <div className={styles.FormField}>
                        <label htmlFor="authors">Авторы публикации</label>
                        <input
                            id="authors"
                            name="authors"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.authors}
                        />
                    </div>

                    <div className={styles.FormField}>
                        <label htmlFor="WoS_CC">Индексация базой данных Web of Science Core Collection</label>
                        <input
                            id="WoS_CC"
                            name="WoS_CC"
                            type="checkbox"
                            onChange={formik.handleChange}
                            checked={formik.values.WoS_CC}
                        />
                    </div>

                    <div className={styles.FormField}>
                        <label htmlFor="scopus">Индексация базой данных Scopus</label>
                        <input
                            id="scopus"
                            name="scopus"
                            type="checkbox"
                            onChange={formik.handleChange}
                            checked={formik.values.scopus}
                        />
                    </div>

                    <div className={styles.FormField}>
                        <label htmlFor="RINC">Индексация базой данных РИНЦ</label>
                        <input
                            id="RINC"
                            name="RINC"
                            type="checkbox"
                            onChange={formik.handleChange}
                            checked={formik.values.RINC}
                        />
                    </div>

                    <div className={styles.FormField}>
                        <label htmlFor="elib_ID">eLIBRARY ID</label>
                        <input
                            id="elib_ID"
                            name="elib_ID"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.elib_ID}
                        />
                    </div>

                    <div className={styles.FormField}>
                        <label htmlFor="if_index_export">Индексация иными зарубежными базами данных</label>
                        <input
                            id="if_index_export"
                            name="if_index_export"
                            onChange={formik.handleChange}
                            value={formik.values.if_index_export}
                        />
                    </div>

                    <div className={styles.FormField}>
                        <label htmlFor="date_publ">Месяц и год публикации</label>
                        <input
                            id="date_publ"
                            name="date_publ"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.date_publ}
                        />
                    </div>

                    <div className={styles.FormField}>
                        <label htmlFor="DOI">Цифровой идентификатор объекта</label>
                        <input
                            id="DOI"
                            name="DOI"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.DOI}
                        />
                    </div>

                    <div className={styles.FormField}>
                        <label htmlFor="ISSN">ISSN</label>
                        <input
                            id="ISSN"
                            name="ISSN"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.ISSN}
                        />
                    </div>

                    <div className={styles.FormField}>
                        <label htmlFor="e_ISSN">e-ISSN</label>
                        <input
                            id="e_ISSN"
                            name="e_ISSN"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.e_ISSN}
                        />
                    </div>

                    <div className={styles.FormField}>
                        <label htmlFor="ISBN">ISBN</label>
                        <input
                            id="ISBN"
                            name="ISBN"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.ISBN}
                        />
                    </div>

                    <div className={styles.FormField}>
                        <label htmlFor="qwart_izd">Квартиль издания JCR Science Edition</label>
                        <input
                            id="qwart_izd"
                            name="qwart_izd"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.qwart_izd}
                        />
                    </div>

                    <div className={styles.FormField}>
                        <label htmlFor="affil">Аффиляция</label>
                        <input
                            id="affil"
                            name="affil"
                            onChange={formik.handleChange}
                            value={formik.values.affil}
                        />
                    </div>

                    <div className={styles.FormField}>
                        <label htmlFor="finans">Источник финансирования исследования</label>
                        <input
                            id="finans"
                            name="finans"
                            onChange={formik.handleChange}
                            value={formik.values.finans}
                        />
                    </div>

                    <div className={styles.FormField}>
                        <label htmlFor="publ_type">Вид публикации</label>
                        <input
                            id="publ_type"
                            name="publ_type"
                            onChange={formik.handleChange}
                            value={formik.values.publ_type}
                        />
                    </div>

                    <button type="submit">Отправить</button>
                </form>
            </div>
        </div>
      
        
    );
}

export default CreatePublicationPage;

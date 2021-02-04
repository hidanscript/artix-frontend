import React, { useState } from "react";
import { Form, Button, Badge } from "react-bootstrap";
import { useTranslation } from 'react-i18next';

export default function FilterSection(props) {
  const [ tags, setTag ] = useState([]);
  const { t } = useTranslation();

  const addTag = (e) => {
    if (e.key === "enter" || e.keyCode === 13) {
      const tagField = document.querySelector("#tag-field");
      const newTag = tagField.value;
      setTag([ ...tags, { value: newTag, id: tags.length } ]);
      tagField.value = "";
    }
  };

  const deleteTag = (index) => {
    setTag([...tags.splice(index)]);
  };

  const applyFilters = (e) => {
    e.preventDefault();
    const params = {
      enableNsfw: document.getElementById('nsfw-switch').checked
    };
    props.applyFilters(params);
  };

  return (
    <div className="filter-section">
      <Form className="filter-form" onSubmit={applyFilters}>
        <h4 className="font-main text-purple filters-title">{t('FILTERS.LABEL')}</h4>
        <div className="switch-container">
          <span className="font-main text-purple">{t('FILTERS.NSFW')}</span>
          <label className="switch ml-auto">
            <input type="checkbox" id="nsfw-switch" value="nsfw-switch" />
            <span className="slider round"></span>
          </label>
        </div>
        <div className="switch-container">
          <span className="font-main text-purple">{t('FILTERS.ONLY_VERIFIED')}</span>
          <label className="switch ml-auto">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
        </div>
        <Form.Control type="text" id="tag-field" onKeyUp={addTag} className="mt-1 mb-1" placeholder={t('FILTERS.ADD_TAGS')} />
        {
          tags.map((tag, index) => <Badge key={tag.id} onClick={() => deleteTag(index)} pill variant="light mr-2 artix-pill">{tag.value}</Badge>)
        }
        <Button block type="submit" className="btn-artix mt-2">{t('FILTERS.APPLY')}</Button>
      </Form>
    </div>
  );
}

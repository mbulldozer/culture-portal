import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import uniqid from 'uniqid';
import { withTranslation } from 'react-i18next';

import ArchitectShortArticle from './ArchitectShortArticle';
import SearchWidget from './SearchWidget';
// import NotFoundMessage from './NotFoundMessage';

class ArchitectsList extends Component {
  // state = {
  //   searchString: '',
  // }

  render() {
    const { t } = this.props;
    const inputPlaceholder = t('site.inputPlaceholder');
    const architects = t('architects', { returnObjects: true });
    return (
      <Container>
        <SearchWidget placeholder={inputPlaceholder} onChange={this.inputTextHandler} />
        {architects
          .map(item => <ArchitectShortArticle key={uniqid()} architect={item} />)}
      </Container>
    );
  }
}

export default withTranslation()(ArchitectsList);
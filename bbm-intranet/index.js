import React from 'react';
import { useCurrentRoute } from 'react-navi';

import Components from '../../components';
import Images from '../../../assets/images';
import { Container } from './styles';

export default function Home() {
  const { data } = useCurrentRoute();

  return (
    <>
      <Components.Banner banners={data.banner} bannerFull />
      <Container>
        <Components.CallPage
          icon={Images.IconDocs}
          title={data.holerite.title}
          buttonUrl={data.holerite.link}
          buttonTitle="Acesse aqui"
        />
        <Components.TitleSection
          title={data.access.title}
          description={data.access.description}
        />
        <Components.AcessoRapido cards={data.access.content} />
      </Container>
    </>
  );
}
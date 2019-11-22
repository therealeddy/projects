import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import {
  Banner,
  CardColor,
  Painel,
  Title,
  TableResumo,
  LinkButton,
  DonutChart,
  LineChartDetail,
  CardResumo,
  CardResumoTemplete
} from 'App/components';
import documentTitle from '~/utils/documentTitle';

import {
  Banners,
  ColumnsFatura,
  DataFatura,
  ColumnsEmbarque,
  DataEmbarque,
  CardsResumo
} from './fakeapi';
import { Container } from './styles';

export default function Dashboard() {
  documentTitle('Dashboard');
  const [cardsColor] = useState([
    {
      type: 'hours',
      number: 102,
      porcent: 25
    },
    {
      type: 'number',
      number: 1043,
      porcent: 25
    },
    {
      type: 'money',
      number: 287345,
      porcent: -38
    }
  ]);

  const [optionPesoSelected, setOptionPesoSelected] = useState(null);
  const optionsPeso = [
    { value: 'Fatura 01', label: 'Fatura 01' },
    { value: 'Fatura 02', label: 'Fatura 02' },
    { value: 'Fatura 03', label: 'Fatura 03' }
  ];

  const [optionEmbarqueSelected, setOptionEmbarqueSelected] = useState(null);
  const optionsEmbarque = [
    { value: 'Embarque 01', label: 'Embarque 01' },
    { value: 'Embarque 02', label: 'Embarque 02' },
    { value: 'Embarque 03', label: 'Embarque 03' }
  ];

  const settingsSlider = {
    dots: false,
    infinite: false,
    speed: 300,
    variableWidth: true
  };

  return (
    <Container>
      <Banner banners={Banners} />
      <div className="container">
        <Title name="Dashboard" className="mb-5" />
        <div className="row d-md-flex d-none">
          {cardsColor.map(item => (
            <div className="col-lg-4" key={String(Math.random())}>
              <CardColor
                type={item.type}
                number={item.number}
                porcent={item.porcent}
              />
            </div>
          ))}
        </div>
        <Slider {...settingsSlider} className="d-block d-md-none carrossel-mts">
          {cardsColor.map(item => (
            <div key={String(Math.random())} className="px-3 car-item-single">
              <CardColor
                type={item.type}
                number={item.number}
                porcent={item.porcent}
              />
            </div>
          ))}
        </Slider>
        <div className="row mb-5">
          <div className="col-xl-3 col-lg-6">
            <CardResumoTemplete>
              <div>
                <CardResumo resumo={CardsResumo[0]} />
                <CardResumo resumo={CardsResumo[1]} />
              </div>
            </CardResumoTemplete>
          </div>
          <div className="col-xl-3 col-lg-6">
            <CardResumoTemplete>
              <div>
                <CardResumo resumo={CardsResumo[2]} />
                <CardResumo resumo={CardsResumo[3]} />
              </div>
            </CardResumoTemplete>
          </div>
          <div className="col-xl-3 col-lg-6">
            <CardResumoTemplete>
              <div>
                <CardResumo resumo={CardsResumo[4]} />
                <CardResumo resumo={CardsResumo[5]} />
              </div>
            </CardResumoTemplete>
          </div>
          <div className="col-xl-3 col-lg-6">
            <CardResumoTemplete>
              <div>
                <CardResumo resumo={CardsResumo[6]} />
                <CardResumo resumo={CardsResumo[7]} />
              </div>
            </CardResumoTemplete>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-lg-6 mb-4">
            <Painel title="Embarques no prazo" className="h-100">
              <DonutChart />
            </Painel>
          </div>
          <div className="col-lg-6">
            <div className="mb-4">
              <Painel
                selectOn
                optionSelected={optionEmbarqueSelected}
                options={optionsEmbarque}
                title="Peso transportado"
                subtitle="em toneladas"
              >
                <LineChartDetail />
              </Painel>
            </div>
            <div className="mb-4">
              <Painel
                selectOn
                optionSelected={optionEmbarqueSelected}
                options={optionsEmbarque}
                title="Valor acumulado"
                subtitle="em reais"
              >
                <LineChartDetail />
              </Painel>
            </div>
          </div>
        </div>
        <div className="row mt-5 d-lg-flex d-none">
          <div className="col-md-6 mb-4">
            <Painel
              title="Faturas"
              selectOn
              optionSelected={optionPesoSelected}
              options={optionsPeso}
              onChangeSelect={e => setOptionPesoSelected(e)}
            >
              <>
                <TableResumo
                  columns={ColumnsFatura}
                  content={DataFatura}
                  className="mb-3"
                />
                <div className="d-flex justify-content-end">
                  <LinkButton to="/faturas">ver todas as faturas</LinkButton>
                </div>
              </>
            </Painel>
          </div>
          <div className="col-md-6 mb-4">
            <Painel
              title="Embarques"
              selectOn
              optionSelected={optionEmbarqueSelected}
              options={optionsEmbarque}
              onChangeSelect={e => setOptionEmbarqueSelected(e)}
            >
              <>
                <TableResumo
                  columns={ColumnsEmbarque}
                  content={DataEmbarque}
                  className="mb-3"
                />
                <div className="d-flex justify-content-end">
                  <LinkButton to="/embarques">
                    ver todas os embarques
                  </LinkButton>
                </div>
              </>
            </Painel>
          </div>
        </div>
      </div>
    </Container>
  );
}
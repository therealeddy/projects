import { Input } from '@rocketseat/unform';
import React, { useState } from 'react';

import {
  Title,
  Search,
  SelectBlue,
  DataPicker,
  BaseInput,
  Select,
  SelectFiltro,
  Pagination,
  Button,
  Dots,
  Slider,
  Painel,
  Checkbox
} from 'App/components';

import { Container } from './styles';

export default function Uikit() {
  const [startDate, setStartDate] = useState(new Date());
  const [optionSelected, setOptionSelected] = useState(null);
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ];
  const [dots, setDots] = useState([true, false]);

  const [sliders] = useState([
    {
      title: 'ATP-223 / ATP-224',
      destinatario: 'Joaquim Santos',
      solicitacoes: 1221,
      progress: 78,
      localOrigem: 'Ponta Grossa',
      horarioSaida: '14/02/2019 às 18:23',
      localEntrega: 'São Paulo',
      horarioChegada: '12/10/2019 às 14:00'
    }
  ]);

  const [checkbox, setCheckbox] = useState({
    checkedA: false,
    checkedB: false
  });

  const handleCheckChange = name => event => {
    setCheckbox({ ...checkbox, [name]: event.target.checked });
  };

  return (
    <Container>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <Title name="Title Primary" type="primary" />
            <Title name="Title Secondary" type="secondary" className="mb-4" />
            <Button className="mb-3 mr-5">Primary</Button>
            <Button category="success" className="mb-3 mr-5">
              Success
            </Button>
            <Button title="Warning" category="warning" className="mb-3 mr-5">
              Warning
            </Button>
            <Button title="Danger" category="danger" className="mb-3 mr-5">
              Danger
            </Button>
            <Dots
              dots={dots}
              onClickPrimaryDot={() => setDots([true, false])}
              onClickSecondDot={() => setDots([false, true])}
              className="mb-5"
            />
          </div>
          <div className="col-md-4">
            <BaseInput label="Email">
              <Input
                type="email"
                name="email"
                placeholder="Email"
                className="mb-3"
              />
            </BaseInput>
            <BaseInput label="Senha" borderFeatured>
              <Input type="password" name="password" className="mb-3" />
            </BaseInput>
            <Select
              // label="Status"
              optionSelected={optionSelected}
              options={options}
              onChangeSelect={e => setOptionSelected(e)}
              className="mb-3"
            />
            <Search
              optionSelected={optionSelected}
              options={options}
              onChangeSelect={e => setOptionSelected(e)}
              placeholder="o que está procurando?"
              className="mb-3"
            />
          </div>
          <div className="col-md-4">
            <SelectBlue
              label="Status"
              optionSelected={optionSelected}
              options={options}
              onChangeSelect={e => setOptionSelected(e)}
              className="mb-3"
            />
            <DataPicker
              label="De"
              onChangeData={data => setStartDate(data)}
              selectedDate={startDate}
              className="mb-3"
            />
            <SelectFiltro
              optionSelected={optionSelected}
              options={options}
              onChangeSelect={e => setOptionSelected(e)}
              className="mb-4"
            />
            <Pagination pages={[0, 1, 2, 3, 4, 5]} className="mx-0 mb-3" />
            <Checkbox
              checked={checkbox.checkedA}
              handleChange={handleCheckChange('checkedA')}
              value="checkedA"
              ariaLabel="primary checkbox"
              label="Data de emissao"
            />
            <Checkbox
              checked={checkbox.checkedB}
              handleChange={handleCheckChange('checkedB')}
              value="checkedB"
              ariaLabel="secondary checkbox"
              label="Status"
            />
          </div>
        </div>
        {dots[1] && <Slider options={sliders[0]} />}
        {dots[0] && (
          <>
            <Painel
              title="Peso transportado"
              subtitle="toneladas"
              className="mb-4"
              selectOn
              optionSelected={optionSelected}
              options={options}
              onChangeSelect={e => setOptionSelected(e)}
            >
              <Title name="Informações Painel" type="secondary" />
            </Painel>
          </>
        )}
      </div>
    </Container>
  );
}
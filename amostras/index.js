import React, { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa";

import CardProduct from "App/Consultora/components/CardProduct";
import ProductFooter from "App/Consultora/components/ProductFooter";
import Modal from "App/Consultora/components/Modal";
import api from "~/services/api";

import { Container, RequestProduct } from "./styles";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [removeButton, setRemoveButton] = useState(false);

  async function getProductByCPF(pageNumber = page) {
    if (page >= 3) {
      return;
    }

    setLoading(true);

    const response = await api.get("product", {
      params: {
        _page: page,
        _limit: 3
      }
    });

    setProducts(
      !products.length ? response.data : [...products, ...response.data]
    );
    setPage(pageNumber + 1);
    setLoading(false);
    setRemoveButton(page === 2);
  }

  useEffect(() => {
    getProductByCPF();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container loading={loading && "ativo"}>
      <div className="container">
        <div className="block-content products">
          <div className="list">
            <div className="products-grid">
              {products.map(({ id, title, image }, index) => (
                <CardProduct
                  key={String(index)}
                  id={id}
                  title={title}
                  image={image}
                  primary={index === 0 && true}
                />
              ))}
              {loading ? (
                <FaSpinner className="loading" size={32} color="#090" />
              ) : (
                !removeButton && (
                  <RequestProduct type="button" onClick={getProductByCPF}>
                    Mostrar mais opções de amostra
                  </RequestProduct>
                )
              )}
            </div>
          </div>
          <ProductFooter />
        </div>
      </div>
      <Modal />
    </Container>
  );
}

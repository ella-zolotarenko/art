import React from "react";

import { FormattedMessage } from "react-intl";

import bagImg from "../img/shop/bag.jpg";
import pillowImg from "../img/shop/pillow.jpg";
import scarf1Img from "../img/shop/scarf_1.jpg";
import scarf2Img from "../img/shop/scarf_2.jpg";
import shirtImg from "../img/shop/shirt.jpg";

import "./ShopStyles.css";

export default function Shop() {
  return (
    <div className="shop-wrap">
      <div className="shop-info">
        <h1>
          <FormattedMessage
            id="shop.info.p1"
            defaultMessage="Products with Petrykivsky painting are available."
          />
        </h1>
        <p>
          <FormattedMessage
            id="shop.info.p2"
            defaultMessage="Sublimation printing."
          />
        </p>
        <p>
          <FormattedMessage
            id="shop.info.p3"
            defaultMessage="High print quality. The fabric is dyed over its entire application surface and penetrates deep into the fibers."
          />
        </p>
        <p>
          <FormattedMessage
            id="shop.info.p4"
            defaultMessage="When washing, use 30-40°C. The image remains sharp and vivid forever."
          />
        </p>
        <p>
          <FormattedMessage
            id="shop.info.p5"
            defaultMessage="You need to iron the product inside out."
          />
        </p>
        <p>
          <FormattedMessage
            id="shop.info.p6"
            defaultMessage="Delivery time for orders is 5-7 days."
          />
        </p>
        <p>
          <FormattedMessage
            id="shop.info.p7"
            defaultMessage="Author: Ella Zolotarenko."
          />
        </p>
        <p>
          <FormattedMessage
            id="shop.info.p8"
            defaultMessage="Products to order"
          />
        </p>
        <p>+380679092785</p>
      </div>
      <div className="shop-catalog">
        <h2>
          <FormattedMessage
            id="shop.catalog.header"
            defaultMessage="Products for your attention:"
          />
        </h2>
        <div className="shop-item">
          <img src={shirtImg} alt="shirt" />
          <div className="shop-item-description">
            <p>
              <FormattedMessage
                id="shop.catalog.shirt1"
                defaultMessage="Knitted t-shirts in 3 colors"
              />
            </p>
            <p>
              <FormattedMessage
                id="shop.catalog.shirt2"
                defaultMessage="3 types of patterns"
              />
            </p>
            <p>
              <FormattedMessage
                id="shop.catalog.shirt3"
                defaultMessage="Price"
              />
            </p>
            <p>
              <FormattedMessage
                id="shop.catalog.shirt4"
                defaultMessage="1-5 pieces – 580 UAH."
              />
            </p>
          </div>
        </div>
        <div className="shop-item">
          <img src={bagImg} alt="bag" />
          <div className="shop-item-description">
            <p>
              <FormattedMessage
                id="shop.catalog.bag1"
                defaultMessage="Shopping bags of 2 sizes:"
              />
            </p>
            <p>
              <FormattedMessage
                id="shop.catalog.bag2"
                defaultMessage="38*55 cm, 38*42 cm"
              />
            </p>
            <p>
              <FormattedMessage
                id="shop.catalog.bag3"
                defaultMessage="Gabardine fabric in 5 colors."
              />
            </p>
            <p>
              <FormattedMessage
                id="shop.catalog.bag4"
                defaultMessage="Price:"
              />
            </p>
            <p>
              <FormattedMessage
                id="shop.catalog.bag5"
                defaultMessage="1-5 pieces – 430 UAH."
              />
            </p>
          </div>
        </div>
        <div className="shop-item">
          <img src={pillowImg} alt="pillow" />
          <div className="shop-item-description">
            <p>
              <FormattedMessage
                id="shop.catalog.pillow1"
                defaultMessage="Pillow"
              />
            </p>
            <p>
              <FormattedMessage
                id="shop.catalog.pillow2"
                defaultMessage="Size 40*40"
              />
            </p>
            <p>
              <FormattedMessage
                id="shop.catalog.pillow3"
                defaultMessage="Material: microfiber or mat"
              />
            </p>
            <p>
              <FormattedMessage
                id="shop.catalog.pillow4"
                defaultMessage="Price: from 1 pc. 330 UAH."
              />
            </p>
          </div>
        </div>
        <div className="shop-item">
          <img src={scarf1Img} alt="scarf" />
          <img src={scarf2Img} alt="scarf" />
          <div className="shop-item-description">
            <p>
              <FormattedMessage
                id="shop.catalog.scarf1"
                defaultMessage="Author's handkerchief with decorative painting"
              />
            </p>
            <p>
              <FormattedMessage
                id="shop.catalog.scarf2"
                defaultMessage="Armani silk and marquise"
              />
            </p>
            <p>
              <FormattedMessage
                id="shop.catalog.scarf3"
                defaultMessage="Size: 70×70, 90×90"
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

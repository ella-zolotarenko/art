import React from "react";

import { FormattedMessage } from "react-intl";

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

import bag0Img from "../img/shop/original/bag_0.jpg";
import bag1Img from "../img/shop/original/bag_1.jpg";
import bag2Img from "../img/shop/original/bag_2.jpg";
import bag3Img from "../img/shop/original/bag_3.jpg";
import bag4Img from "../img/shop/original/bag_4.jpg";
import bag5Img from "../img/shop/original/bag_5.jpg";
import bag6Img from "../img/shop/original/bag_6.jpg";
import scarf1Img from "../img/shop/original/scarf_1.jpg";
import scarf2Img from "../img/shop/original/scarf_2.jpg";
import scarf3Img from "../img/shop/original/scarf_3.jpg";
import scarf4Img from "../img/shop/original/scarf_4.jpg";
import shirt0Img from "../img/shop/original/shirt_0.jpg";
import shirt1Img from "../img/shop/original/shirt_1.jpg";
import shirt2Img from "../img/shop/original/shirt_2.jpg";
import shirt3Img from "../img/shop/original/shirt_3.jpg";
import shirt4Img from "../img/shop/original/shirt_4.jpg";
import thermos1Img from "../img/shop/original/thermos_1.jpg";
import thermos2Img from "../img/shop/original/thermos_2.jpg";
import thermos3Img from "../img/shop/original/thermos_3.jpg";
import thermos4Img from "../img/shop/original/thermos_4.jpg";
import thermos5Img from "../img/shop/original/thermos_5.jpg";

import "./ShopStyles.css";

export default function Shop() {
  const bagImages = [
    {
      original: bag0Img,
    },
    {
      original: bag1Img,
    },
    {
      original: bag2Img,
    },
    {
      original: bag3Img,
    },
    {
      original: bag4Img,
    },
    {
      original: bag5Img,
    },
    {
      original: bag6Img,
    },
  ];
  const scarfImages = [
    {
      original: scarf1Img,
    },
    {
      original: scarf2Img,
    },
    {
      original: scarf3Img,
    },
    {
      original: scarf4Img,
    },
  ];
  const shirtImages = [
    {
      original: shirt0Img,
    },
    {
      original: shirt1Img,
    },
    {
      original: shirt2Img,
    },
    {
      original: shirt3Img,
    },
    {
      original: shirt4Img,
    },
  ];
  const thermosImages = [
    {
      original: thermos1Img,
    },
    {
      original: thermos2Img,
    },
    {
      original: thermos3Img,
    },
    {
      original: thermos4Img,
    },
    {
      original: thermos5Img,
    },
  ];

  return (
    <div className="shop-wrap">
      <div className="shop-catalog">
        {/* <h2>
          <FormattedMessage
            id="shop.catalog.header"
            defaultMessage="Products for your attention:"
          />
        </h2> */}
        <div className="shop-item">
          <div className="shop-gallery">
            <ImageGallery
              items={shirtImages}
              showPlayButton={false}
              showBullets
              showThumbnails={false}
            />
          </div>

          <div className="shop-item-description">
            <p>
              <FormattedMessage
                id="shop.catalog.shirt1"
                defaultMessage="T-shirts of 3 types:"
              />
            </p>
            <p>
              <FormattedMessage
                id="shop.catalog.shirt2"
                defaultMessage="Sublimation printing, a method of hot application and embedding into the structure of the fabric, which gives impeccable quality. Does not change colors during washing and use."
              />
            </p>
            <p>
              <FormattedMessage
                id="shop.catalog.shirt3"
                defaultMessage="High quality cotton, white jersey t-shirt, navy blue t-shirt, cotton."
              />
            </p>
            <p>
              <FormattedMessage
                id="shop.catalog.shirt4"
                defaultMessage="The cost of each is 15 USD."
              />
            </p>
            <br />
            <p>
              <FormattedMessage
                id="shop.catalog.shirt5"
                defaultMessage="The drawing is applied by the method of sublimation heat transfer, embedding into fabric fibers."
              />
            </p>
            <p>
              <FormattedMessage
                id="shop.catalog.shirt6"
                defaultMessage="Hand wash ~ 40° C. Iron inside out."
              />
            </p>
            <br />
            <p>
              <FormattedMessage
                id="shop.catalog.shirt7"
                defaultMessage="Author's drawing:"
              />
            </p>
            <p>
              <FormattedMessage
                id="shop.catalog.shirt8"
                defaultMessage="#artzolotarenko"
              />
            </p>
            <p>
              <FormattedMessage
                id="shop.catalog.shirt9"
                defaultMessage="#artpetrykivkazolotarenkoella"
              />
            </p>
            <p>
              <FormattedMessage
                id="shop.catalog.shirt10"
                defaultMessage="#петриківськийрозписульвові"
              />
            </p>
            <br />
            <p>
              <FormattedMessage
                id="shop.catalog.shirt11"
                defaultMessage="Orders are accepted in private or by phone +380679092785"
              />
            </p>
          </div>
        </div>
        <div className="shop-item">
          <div className="shop-gallery">
            <ImageGallery
              items={bagImages}
              showPlayButton={false}
              showBullets
              showThumbnails={false}
            />
          </div>

          <div className="shop-item-description">
            <p>
              <FormattedMessage
                id="shop.catalog.bag1"
                defaultMessage="The shopping bag is made of white dense fabric 230 g/m2. The composition of the fabric is 60% - polyester thread, 40% - cotton, which gives the product wear resistance and guarantees easy removal of dirt. Guarantee of high quality when used and washed."
              />
            </p>
            <p>
              <FormattedMessage
                id="shop.catalog.bag2"
                defaultMessage="Bag dimensions: 38x42 cm."
              />
            </p>
            <p>
              <FormattedMessage
                id="shop.catalog.bag3"
                defaultMessage="Colored handles."
              />
            </p>
            <p>
              <FormattedMessage
                id="shop.catalog.bag4"
                defaultMessage="Cost: 15 USD."
              />
            </p>
            <br />
            <p>
              <FormattedMessage
                id="shop.catalog.bag5"
                defaultMessage="The images are applied by the method of sublimation thermal transfer, embedding into the fibers of the fabric."
              />
            </p>
            <p>
              <FormattedMessage
                id="shop.catalog.bag6"
                defaultMessage="Author's drawing:"
              />
            </p>
            <p>
              <FormattedMessage
                id="shop.catalog.bag7"
                defaultMessage="#artzolotarenko"
              />
            </p>
            <p>
              <FormattedMessage
                id="shop.catalog.bag8"
                defaultMessage="#artpetrykivkazolotarenkoella"
              />
            </p>
            <p>
              <FormattedMessage
                id="shop.catalog.bag9"
                defaultMessage="#петриківськийрозписульвові"
              />
            </p>
            <br />
            <p>
              <FormattedMessage
                id="shop.catalog.bag10"
                defaultMessage="Orders are accepted, write in advance in Viber, Whats App: +380679092785"
              />
            </p>
          </div>
        </div>
        <div className="shop-item">
          <div className="shop-gallery">
            <ImageGallery
              items={scarfImages}
              showPlayButton={false}
              showBullets
              showThumbnails={false}
            />
          </div>

          <div className="shop-item-description">
            <p>
              <FormattedMessage
                id="shop.catalog.scarf1"
                defaultMessage="Author's handkerchief with a decorative painting, from the Aposto Print company."
              />
            </p>
            <p>
              <FormattedMessage
                id="shop.catalog.scarf2"
                defaultMessage="Armani silk and marquiset."
              />
            </p>
            <p>
              <FormattedMessage
                id="shop.catalog.scarf3"
                defaultMessage="Size 70×70, 90×90 cm."
              />
            </p>
            <p>
              <FormattedMessage
                id="shop.catalog.scarf4"
                defaultMessage="To order by the phone: +380679092785."
              />
            </p>
            <p>
              <FormattedMessage
                id="shop.catalog.scarf5"
                defaultMessage="Cost: 35 USD."
              />
            </p>
            <br />
            <p>
              <FormattedMessage
                id="shop.catalog.scarf6"
                defaultMessage="#artzolotarenko"
              />
            </p>
            <p>
              <FormattedMessage
                id="shop.catalog.scarf7"
                defaultMessage="#петриківськийрозписульвові"
              />
            </p>
            <p>
              <FormattedMessage
                id="shop.catalog.scarf8"
                defaultMessage="#петриківськийрозпис"
              />
            </p>
            <p>
              <FormattedMessage
                id="shop.catalog.scarf9"
                defaultMessage="#artpetrykivkazolotarenkoella"
              />
            </p>
          </div>
        </div>
        <div className="shop-item">
          <div className="shop-gallery">
            <ImageGallery
              items={thermosImages}
              showPlayButton={false}
              showBullets
              showThumbnails={false}
            />
          </div>

          <div className="shop-item-description">
            <p>
              <FormattedMessage
                id="shop.catalog.thermos1"
                defaultMessage="Thermos, thermal mug, drinking cup."
              />
            </p>
            <p>
              <FormattedMessage
                id="shop.catalog.thermos2"
                defaultMessage="The product is made with love and professionally printed by @Iryna Panko."
              />
            </p>
            <p>
              <FormattedMessage
                id="shop.catalog.thermos3"
                defaultMessage="Thank you to Irina Panko for the excellent quality and quick production of products."
              />
            </p>
            <p>
              <FormattedMessage
                id="shop.catalog.thermos4"
                defaultMessage="The picture is applied by the method of sublimation thermal transfer."
              />
            </p>
            <p>
              <FormattedMessage
                id="shop.catalog.thermos5"
                defaultMessage="Cost: 20 USD."
              />
            </p>
            <br />
            <p>
              <FormattedMessage
                id="shop.catalog.thermos6"
                defaultMessage="Author's drawing:"
              />
            </p>
            <p>
              <FormattedMessage
                id="shop.catalog.thermos7"
                defaultMessage="#artzolotarenko"
              />
            </p>
            <p>
              <FormattedMessage
                id="shop.catalog.thermos8"
                defaultMessage="#artpetrykivkazolotarenkoella"
              />
            </p>
            <p>
              <FormattedMessage
                id="shop.catalog.thermos9"
                defaultMessage="#петриківськийрозписульвові"
              />
            </p>
            <br />
            <p>
              <FormattedMessage
                id="shop.catalog.thermos10"
                defaultMessage="To order, write to personal +380679092785"
              />
            </p>
          </div>
        </div>
      </div>
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
    </div>
  );
}

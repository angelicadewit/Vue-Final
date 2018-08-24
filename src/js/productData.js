let products = {
    firstCleansers: [
        {
            name: "Heimish Cleansing Balm",
            skin: ["oily"],
            amazon: `https://www.amazon.com/Heimish-Clean-Balm-Cleansing-120ml/dp/B01CJ639SM/ref=sr_1_3_a_it?ie=UTF8&qid=1535079624&sr=8-3&keywords=Heimish+Cleansing+Balm`,
            notAmazonStore: "Yes Style",
            notAmazonURL: `https://www.yesstyle.com/en/list.html?bpt=48&q=Heimish+Cleansing+Balm`,
        },
        {
            name: "Kose Softymo Speedy Cleansing Oil",
            skin: ["combo","oily"],
            amazon: `https://www.amazon.com/KOSE-SOFTYMO-Speedy-Cleansing-230ml/dp/B000V2FBAQ/ref=sr_1_1_a_it?ie=UTF8&qid=1535082521&sr=8-1&keywords=Kose+Softymo+Speedy+Cleansing+Oil`,
            notAmazonStore: "Yes Style",
            notAmazonURL: `https://www.yesstyle.com/en/kose-softymo-speedy-cleansing-oil-230ml/info.html/pid.1050599597`,
        },
        {
            name: "DHC Cleansing Oil",
            skin: ["combo"],
            amazon: `https://www.amazon.com/DHC-Deep-Cleansing-Oil-4-1/dp/B00KHO5464/ref=sr_1_4_a_it?ie=UTF8&qid=1535082970&sr=8-4&keywords=dhc+cleansing+oil`,
            notAmazonURL: `http://www.testerkorea.com/Product/dhc-deep-cleansing-oil-70ml`,
            notAmazonStore: "Tester Korea",
            
        },
        {
            name: "Banila Clean It Zero",
            skin: ["normal"],
            amazon: `https://www.amazon.com/Cleansing-Original-cleanser-Testing-Parabens/dp/B07BQGZ8GK/ref=sr_1_2_a_it?ie=UTF8&qid=1535083099&sr=8-2&keywords=banila+co+clean+it+zero`,
            notAmazonURL: `http://jolse.com/product/detail.html?product_no=14236&cate_no=25&display_group=1`,
            notAmazonStore: `Jolse`,
        },
        {
            name: "The Face Shop Rice Water Bright Cleansing Rich Oil",
            skin: ["normal"],
            amazon: `https://www.amazon.com/Facial-Cleanser-Natural-Cleansing-Moisturizer/dp/B00809ERAM/ref=sr_1_3_a_it?ie=UTF8&qid=1535083250&sr=8-3&keywords=Rice+Water+Bright+Cleansing`,
            notAmazonURL: `http://jolse.com/product/detail.html?product_no=4425&cate_no=58&display_group=1`,
            notAmazonStore: `Jolse`,
        },
        {
            name: "Kose Softymo Deep Cleansing Oil",
            skin: ["dry"],
            amazon: `https://www.amazon.com/KOSE-Softy-Deep-Treatment-7-8oz/dp/B000V2FB88/ref=sr_1_1_a_it?ie=UTF8&qid=1535083334&sr=8-1&keywords=Kose+Softymo+Deep+Cleansing+Oil`,
            notAmazonStore: `Yes Style`,
            notAmazonURL: `https://www.yesstyle.com/en/kose-softymo-deep-cleansing-oil-230ml/info.html/pid.1049136003`
        },
        {
            name: "Chinoshio Natural Cleansing Oil",
            skin: ["dry"],
            amazon: `https://www.amazon.com/s/?ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=Chinoshio+Natural+Cleansing+Oil&rh=i%3Aaps%2Ck%3AChinoshio+Natural+Cleansing+Oil`,
            notAmazonStore: `Tester Korea`,
            notAmazonURL: `http://www.testerkorea.com/Product/chinoshio-natural-cleansing-oil-150ml`
        },
    ],
    secondCleansers: [
        {
            name: "Hada Labo Gokujyn Hyaluronic Foam Cleanser",
            skin: ["oily","combo"],
            amazon: `https://www.amazon.com/Hada-Labo-Gokujyn-Hyaluronic-Cleansing/dp/B01CE5P580/ref=sr_1_2_a_it?ie=UTF8&qid=1535084217&sr=8-2&keywords=Hada+Labo+Gokujyn+Hyaluronic+Foam+Cleanser`,
            notAmazonURL: `https://www.yesstyle.com/en/mentholatum-hada-labo-goku-jyun-super-hyaluronic-face-foam-160ml/info.html/pid.1053104279`,
            notAmazonStore: `Yes Style`
        },
        {
            name: "Tosowoong Enzyme Powder Wash",
            skin: ["oily"],
            amazon: `https://www.amazon.com/Tosowoong-cleanser-blackheads-cleansing-cosmetics/dp/B00I76Q3XM/ref=sr_1_1_a_it?ie=UTF8&qid=1535087021&sr=8-1&keywords=Tosowoong+Enzyme+Powder+Wash`,
            notAmazonStore: `Jolse`,
            notAmazonURL: `http://jolse.com/product/detail.html?product_no=10658&cate_no=25&display_group=1`,
        },
        {
            name: "CeraVe Hydrating Cleanser",
            skin: ["normal","dry"],
            amazon: `https://www.amazon.com/CeraVe-Hydrating-Facial-Cleanser-Washing/dp/B01MSSDEPK/ref=sr_1_3_a_it?ie=UTF8&qid=1535087105&sr=8-3&keywords=CeraVe+Hydrating+Cleanser`,
            notAmazonStore: `Ulta`,
            notAmazonURL: `https://www.ulta.com/hydrating-face-cleanser-face-wash-normal-dry-skin?productId=xlsImpprod4190255`,
        },
        { 
            name: "Innisfree Blueberry Rebalancing 5.5 Cleanser",
            skin: ["combo"], 
            amazon: `https://www.amazon.com/Innisfree-Blueberry-Rebalancing-Cleanser-100ml/dp/B019IHFR62/ref=sr_1_1_a_it?ie=UTF8&qid=1535087664&sr=8-1&keywords=Innisfree+Blueberry+Rebalancing+5.5+Cleanser`,
            notAmazonStore: `Jolse`,
            notAmazonURL: `https://www.amazon.com/Innisfree-Blueberry-Rebalancing-Cleanser-100ml/dp/B019IHFR62/ref=sr_1_1_a_it?ie=UTF8&qid=1535087664&sr=8-1&keywords=Innisfree+Blueberry+Rebalancing+5.5+Cleanser`,
        },
        {
            name: "Cosrx Good Morning Gel Cleanser",
            skin: ["normal"],
            amazon: `https://www.amazon.com/COSRX-Good-Morning-Cleanser-150ml/dp/B016NRXO06/ref=sr_1_2_a_it?ie=UTF8&qid=1535087205&sr=8-2&keywords=Cosrx+Good+Morning+Gel+Cleanser`,
            notAmazonStore: `Jolse`,
            notAmazonURL: `http://jolse.com/product/detail.html?product_no=6250&cate_no=25&display_group=1`,
        },
        {
            name: "ACWELL PH Balancing Bubble Cleanser",
            skin: ["dry"],
            amazon: `https://www.amazon.com/ACWELL-Bubble-Balancing-Cleanser-150ml/dp/B00OR977RE/ref=sr_1_2_a_it?ie=UTF8&qid=1535087340&sr=8-2&keywords=acwell+5.5`,
            notAmazonStore: `SokoGlam`,
            notAmazonURL: `https://sokoglam.com/products/acwell-bubble-free-ph-balancing-cleanser`,
        },
    ],
    hydratingToners: [
        {
            name: "Hada Labo Gokujyn Hyaluronic Acid Lotion",
            skin: ["oily"], 
            amazon: `https://www.amazon.com/Hada-Labo-Hadalabo-Gokujun-Hyaluronic/dp/B00BSNBO9O/ref=sr_1_2_a_it?rps=1&ie=UTF8&qid=1535087456&sr=8-2&keywords=Hada+Labo+Gokujyn+Hyaluronic+Acid+Lotion&refinements=p_85%3A2470955011`,
            notAmazonStore: `Yes Style`,
            notAmazonURL: `https://www.yesstyle.com/en/mentholatum-hada-labo-goku-jyun-hyaluronic-acid-lotion-moist-170ml/info.html/pid.1061871297`,
        },
        {
            name: "Kikumasamune sake high moist lotion",
            skin: ["combo", "oily", "dry", "normal"],
            amazon: `https://www.amazon.com/Kikumasamune-Sake-Skin-Lotion-Moisture/dp/B00ECQCVK0/ref=sr_1_1_a_it?ie=UTF8&qid=1535087922&sr=8-1&keywords=Kikumasamune+sake+high+moist+lotion`,
            notAmazonStore: `Sasa`,
            notAmazonURL: `http://web1.sasa.com/SasaWeb/eng/product/viewProductDetail.jspa?itemno=107326902002`,
        },
        {
            name: "Dr. Jart+ Ceramidin Liquid",
            skin: ["combo"],
            amazon: `https://www.amazon.com/Dr-Jart-Ceramidin-Liquid-Ounce/dp/B00AMANH58/ref=sr_1_2_a_it?ie=UTF8&qid=1535089255&sr=8-2&keywords=Dr.+Jart%2B+Ceramidin+Liquid`,
            notAmazonStore: `Sephora`,
            notAmazonURL: `https://www.sephora.com/product/ceramidin-tm-liquid-P434364?skuId=2077832&keyword=Dr.%20Jart%20Ceramidin%20Liquid`,
        },
        {
            name: "CEZANNE Skin Conditioner High Moist",
            skin: ["normal"],
            amazon: `https://www.amazon.com/Japan-Health-Beauty-Humidity-conditioner/dp/B00RWMHTU8/ref=sr_1_1_a_it?ie=UTF8&qid=1535088049&sr=8-1&keywords=CEZANNE+Skin+Conditioner+High+Moist`,
            notAmazonStore: `Yes Style`,
            notAmazonURL: `https://www.yesstyle.com/en/cezanne-skin-conditioner-high-moist-500ml/info.html/pid.1059432890`,
        },
        {
            name: "Klairs Supple Preparation Toner",
            skin: ["dry"],
            amazon: `https://www.amazon.com/Preparation-moisturizer-without-paraben-alcohol/dp/B00PGOFYG0/ref=sr_1_1_a_it?ie=UTF8&qid=1535088349&sr=8-1&keywords=Klairs+Supple+Preparation+Toner`,
            notAmazonStore: `Soko Glam`,
            notAmazonURL: `https://sokoglam.com/products/klairs-supple-preparation-facial-toner-180ml`,
        },
    ],
    moisturizers: [
        {
            name: "Etude House Moistfull Collagen Water Jelly Cream",
            skin: ["oily"], 
            amazon:
            notAmazonStore:
            notAmazonURL:
        },
        {
            name: "Rosette Ceramide Gel",
            skin: ["combo"],
            amazon:
            notAmazonStore:
            notAmazonURL:
        },
        {
            name: "Belif Aqua Bomb",
            skin: ["normal"],
        amazon:
            notAmazonStore:
            notAmazonURL:
        },
        {
            name: "Beauty of Joseon Dynasty Cream",
            skin: ["dry"],
            amazon:
            notAmazonStore:
            notAmazonURL:
        },
    ],
    sunscreen: [
        {
            name: "Allie Extra UV Gel Mineral Moist SPF 50+ PA+++",
            skin: ["oily"], 
            amazon:
            notAmazonStore:
            notAmazonURL:
        },
        {
            name: "Biore UV Aqua Rich Watery Essence SPF 50+ PA++++",
            skin: ["combo"],
            amazon:
            notAmazonStore:
            notAmazonURL:
        },
        {
            name: "Karadium snail repair sun cream SPF 50+ PA+++",
            skin: ["normal"],
            amazon:
            notAmazonStore:
            notAmazonURL:
        },
        {
            name: "Biore UV Aqua Rich Watery Gel SPF 50+ PA++++",
            skin: ["dry"],
            amazon:
            notAmazonStore:
            notAmazonURL:
        },
    ],
}
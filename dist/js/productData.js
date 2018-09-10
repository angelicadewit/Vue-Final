"use strict";

var products = {
    firstCleansers: [{
        name: "Heimish Cleansing Balm",
        skin: ["oily"],
        img: "/dist/img/heimishcleansingbalm.jpg",
        amazon: "https://www.amazon.com/Heimish-Clean-Balm-Cleansing-120ml/dp/B01CJ639SM/ref=sr_1_3_a_it?ie=UTF8&qid=1535079624&sr=8-3&keywords=Heimish+Cleansing+Balm",
        notAmazonStore: "Yes Style",
        notAmazonURL: "https://www.yesstyle.com/en/list.html?bpt=48&q=Heimish+Cleansing+Balm",
        ingredients: "Ethylhexyl Palmitate, Cetyl Ethylhexanoate, PEG-20 Glyceryl Triisostearate, Polyethylene, PEG-8 Isostearate, Butyrospermum Parkii (Shea) Butter, Cocos Nucifera (Coconut) Fruit Extract, Citrus Aurantifolia (Lime) Fruit Extract, Freesia Refracta Extract, Iris Versicolor Extract, Jasminum Officinale (Jasmine) Extract, Lilium Tigrinum Extract, Leontopodium Alpinum Extract, Nelumbium Speciosum Flower Extract, Narcissus Pseudo-Narcissus (Daffodil) Flower Extract, Rose Extract, Citrus Aurantium Dulcis (Orange) Peel Oil, Lavandula Angustifolia (Lavender) Oil, Pelargonium Graveolens Flower Oil, Amyris Balsamifera Bark Oil, Citrus Paradisi (Grapefruit) Peel Oil, Eucalyptus Globulus Leaf Oil, Melaleuca Alternifolia (Tea Tree) Leaf Oil, Juniperus Mexicana Oil, Boswellia Carterii Oil, Citrus Aurantium Bergamia (Bergamot) Fruit Oil, Tocopheryl Acetate, 1, 2-Hexanediol.",
        cosDNALink: "http://www.cosdna.com/eng/product.php?q=Heimish+Cleansing+Balm",
        skincarismaLink: "https://www.skincarisma.com/products/heimish/all-clean-balm",
        isActive: false
    }, {
        name: "Kose Softymo Speedy Cleansing Oil",
        skin: ["combo", "oily"],
        img: "/dist/img/softymospeedy.jpg",
        amazon: "https://www.amazon.com/KOSE-SOFTYMO-Speedy-Cleansing-230ml/dp/B000V2FBAQ/ref=sr_1_1_a_it?ie=UTF8&qid=1535082521&sr=8-1&keywords=Kose+Softymo+Speedy+Cleansing+Oil",
        notAmazonStore: "Yes Style",
        notAmazonURL: "https://www.yesstyle.com/en/kose-softymo-speedy-cleansing-oil-230ml/info.html/pid.1050599597",
        ingredients: "Mineral Oil, Peg-8 Glyceryl Isostearate, Cethyl Ethylhexancate, Cyclomethicone, Water, Simmondsia Chinensis (Jojoba) Seed Oil, Isostearic Acid, Glycerin, Phenoxyethanol",
        cosDNALink: "http://www.cosdna.com/eng/product.php?q=KOSE+SOFTYMO+Speedy+Cleansing+Oil",
        skincarismaLink: "https://www.skincarisma.com/products/kose/softy-mo-speedy-cleansing-oil",
        isActive: false
    }, {
        name: "DHC Cleansing Oil",
        skin: ["combo"],
        img: "/dist/img/dhcoil.jpg",
        amazon: "https://www.amazon.com/DHC-Deep-Cleansing-Oil-4-1/dp/B00KHO5464/ref=sr_1_4_a_it?ie=UTF8&qid=1535082970&sr=8-4&keywords=dhc+cleansing+oil",
        notAmazonURL: "http://www.testerkorea.com/Product/dhc-deep-cleansing-oil-70ml",
        notAmazonStore: "Tester Korea",
        ingredients: "Olea Europaea (olive) Fruit Oil, Caprylic/capric Triglyceride, Sorbeth-30 Tetraoleate, Pentylene Glycol, Phenoxyethanol, Tocopherol, Stearyl Glycyrrhetinate, Rosmarinus Officinalis (rosemary) Leaf Oil",
        cosDNALink: "http://www.cosdna.com/eng/product.php?q=DHC+Cleansing+Oil",
        skincarismaLink: "https://www.skincarisma.com/products/dhc/deep-cleansing-oil",
        isActive: false
    }, {
        name: "Banila Clean It Zero",
        skin: ["normal"],
        img: "/dist/img/ciz.jpg",
        amazon: "https://www.amazon.com/Cleansing-Original-cleanser-Testing-Parabens/dp/B07BQGZ8GK/ref=sr_1_2_a_it?ie=UTF8&qid=1535083099&sr=8-2&keywords=banila+co+clean+it+zero",
        notAmazonURL: "http://jolse.com/product/detail.html?product_no=14236&cate_no=25&display_group=1",
        notAmazonStore: "Jolse",
        ingredients: "Ethylhexyl Palmitate, Cetyl Ethylhexanoate, PEG-20 Glyceryl Triisostearate , PEG-10 Isostearate, Synthetic Wax, Onsen-Sui, Phenoxyethanol, Butylene Glycol, Lithospermum Erythrorhizon Root Extract, Tocopheryl Acetate, Fragrance, Ethylhexylglycerin, Water, 1,2-Hexanediol, Bambusa Vulgaris Leaf/Stem Extract Aspalathus Linearis Extract, Angelica Archangelica Root Extract, Malpighia Glabra (Acerola) Fruit Extract, Polydiethyleneglycol Adipate/IPDI Copolymer, Acrylates/Ammonium Methacrylate Copolymer, Acrylates/Methoxy PEG-15 Methacrylate Copolymer.",
        cosDNALink: "http://www.cosdna.com/eng/product.php?q=Banila+Co+-+Clean+It+Zero+Original",
        skincarismaLink: "https://www.skincarisma.com/products/banila-co/clean-it-zero",
        isActive: false
    }, {
        name: "The Face Shop Rice Water Bright Cleansing Rich Oil",
        skin: ["normal"],
        img: "/dist/img/ricewater.jpg",
        amazon: "https://www.amazon.com/Facial-Cleanser-Natural-Cleansing-Moisturizer/dp/B00809ERAM/ref=sr_1_3_a_it?ie=UTF8&qid=1535083250&sr=8-3&keywords=Rice+Water+Bright+Cleansing",
        notAmazonURL: "http://jolse.com/product/detail.html?product_no=4425&cate_no=58&display_group=1",
        notAmazonStore: "Jolse",
        ingredients: "Cetyl Ethylhexanoate, Caprylic/CapricTriglyceride, Isopropyl Myristate, Sorbeth-30, Tetraoleate, Polyglyceryl-10, Diisostearate, Glycerin, Oryza Sativa (Rice) Bran Oil, Aleurites Moluccana Seed Oil, Canola Oil, Butylene Glycol, Oryza Sativa (Rice) Extract, Saponaria Officinalis Leaf Extract, Water/Eau, Parfum/Fragrance, Hexyl Cinnamal, Hydroxyisohexyl 3-Cyclohexene, Carboxaldehyde",
        cosDNALink: "http://www.cosdna.com/eng/product.php?q=The+Face+Shop+Rice+Water+Bright+Cleansing+Rich+Oil",
        skincarismaLink: "https://www.skincarisma.com/products/the-face-shop/rice-water-bright-rich-cleansing-oil",
        isActive: false
    }, {
        name: "Kose Softymo Deep Cleansing Oil",
        skin: ["dry"],
        img: "/dist/img/softymodeep.jpg",
        amazon: "https://www.amazon.com/KOSE-Softy-Deep-Treatment-7-8oz/dp/B000V2FB88/ref=sr_1_1_a_it?ie=UTF8&qid=1535083334&sr=8-1&keywords=Kose+Softymo+Deep+Cleansing+Oil",
        notAmazonStore: "Yes Style",
        notAmazonURL: "https://www.yesstyle.com/en/kose-softymo-deep-cleansing-oil-230ml/info.html/pid.1049136003",
        ingredients: "Oryza Sativa (rice) Bran Oil, Mineral Oil, Sorbeth-30 Tetraoleate, Triethyl Hexanoine, Cyclomethicone, Orange Oil, Tocopherol, Simmondsia Chinensis (jojoba) Seed Oil, Glycerin, Polyglyceryl-2 Diisostearate, Trilaureth-4 Phosphate, Water, Phenoxyethanol",
        cosDNALink: "http://www.cosdna.com/eng/product.php?q=Kose+Softymo+Deep+Cleansing+Oil",
        skincarismaLink: "https://www.skincarisma.com/products/kose/softymo-deep-cleansing-oil",

        isActive: false
    }, {
        name: "Chinoshio Natural Cleansing Oil",
        skin: ["dry"],
        img: "/dist/img/chinosino.jpg",
        amazon: "https://www.amazon.com/s/?ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=Chinoshio+Natural+Cleansing+Oil&rh=i%3Aaps%2Ck%3AChinoshio+Natural+Cleansing+Oil",
        notAmazonStore: "Tester Korea",
        notAmazonURL: "http://www.testerkorea.com/Product/chinoshio-natural-cleansing-oil-150ml",
        ingredients: "Laurate Methyl Heptyl, Dioleic Acid Polyglyceryl -10, Sesquicaprylic Acid Polyglyceryl -2, Jojoba Seed Oil, Bergamot Fruit Oil, Glycerin, Tocopherol",
        cosDNALink: "http://www.cosdna.com/eng/product.php?q=Chinoshio+Natural+Cleansing+Oil",
        skincarismaLink: "https://www.skincarisma.com/search?utf8=%E2%9C%93&q=Chinoshio+Natural+Cleansing+Oil",
        isActive: false
    }],
    secondCleansers: [{
        name: "Hada Labo Gokujyn Hyaluronic Foam Cleanser",
        skin: ["oily", "combo"],
        img: "/dist/img/hadalabofoaming.jpg",
        amazon: "https://www.amazon.com/Hada-Labo-Gokujyn-Hyaluronic-Cleansing/dp/B01CE5P580/ref=sr_1_2_a_it?ie=UTF8&qid=1535084217&sr=8-2&keywords=Hada+Labo+Gokujyn+Hyaluronic+Foam+Cleanser",
        notAmazonURL: "https://www.yesstyle.com/en/mentholatum-hada-labo-goku-jyun-super-hyaluronic-face-foam-160ml/info.html/pid.1053104279",
        notAmazonStore: "Yes Style",
        ingredients: "Water, Peg-8, Butylene Glycol, Polyglyceryl-10 Laurate, Tea-cocoyl Alaninate, Sodium Cocoamphoacetate, Glycerine, Disodium Cocoyl Glutamate, Hydroxypropyltrimonium Hyaluronate, Methylparaben, Sodium Acetylated Hyaluronate, Sodium Cocoyl Glutamate, Starch Hydroxypropyltrimonium Chloride, Succinic Acid",
        cosDNALink: "http://www.cosdna.com/eng/product.php?q=Hada+Labo+Foaming",
        skincarismaLink: "https://www.skincarisma.com/products/hada-labo/gokujyun-foaming-wash",
        isActive: false
    }, {
        name: "Tosowoong Enzyme Powder Wash",
        skin: ["oily"],
        img: "/dist/img/tosowoong.jpg",
        amazon: "https://www.amazon.com/Tosowoong-cleanser-blackheads-cleansing-cosmetics/dp/B00I76Q3XM/ref=sr_1_1_a_it?ie=UTF8&qid=1535087021&sr=8-1&keywords=Tosowoong+Enzyme+Powder+Wash",
        notAmazonStore: "Jolse",
        notAmazonURL: "http://jolse.com/product/detail.html?product_no=10658&cate_no=25&display_group=1",
        ingredients: "Zea Mays (Corn) Starch, Sodium Lauroyl Aspartate, Sodium Cocoyl Isethionate, Sodium Palmitate, Sodium Laureth Sulfate, Titanium Dioxide, Dipotassium Glycyrrhizate, 1,2-Hexanediol, Phenoxyethanol, Papain(and) Maltodextrin",
        cosDNALink: "http://www.cosdna.com/eng/product.php?q=Tosowoong+Enzyme+Powder+Wash",
        skincarismaLink: "https://www.skincarisma.com/products/tosowoong/enzyme-powder-wash-cleanser",

        isActive: false
    }, {
        name: "CeraVe Hydrating Cleanser",
        skin: ["normal", "dry"],
        img: "/dist/img/ceravehydrating.jpeg",
        amazon: "https://www.amazon.com/CeraVe-Hydrating-Facial-Cleanser-Washing/dp/B01MSSDEPK/ref=sr_1_3_a_it?ie=UTF8&qid=1535087105&sr=8-3&keywords=CeraVe+Hydrating+Cleanser",
        notAmazonStore: "Ulta",
        notAmazonURL: "https://www.ulta.com/hydrating-face-cleanser-face-wash-normal-dry-skin?productId=xlsImpprod4190255",
        ingredients: "Behentrimonium Methosulfate, Disodium Edta, Glycerine, Hyaluronic Acid, Methylparaben, Polyoxyl 40 Stearate, Polysorbate 20, Potassium Phosphate Dibasic, Potassium Phosphate Monobasic, Propylparaben, Stearyl Alcohol, Water",
        skincarismaLink: "https://www.skincarisma.com/products/cerave/hydrating-cleanser",
        cosDNALink: "http://www.cosdna.com/eng/product.php?q=CeraVe+Hydrating+Cleanser",
        isActive: false
    }, {
        name: "Innisfree Blueberry Rebalancing 5.5 Cleanser",
        skin: ["combo"],
        img: "/dist/img/innisfreeblueberry.jpeg",
        amazon: "https://www.amazon.com/Innisfree-Blueberry-Rebalancing-Cleanser-100ml/dp/B019IHFR62/ref=sr_1_1_a_it?ie=UTF8&qid=1535087664&sr=8-1&keywords=Innisfree+Blueberry+Rebalancing+5.5+Cleanser",
        notAmazonStore: "Jolse",
        notAmazonURL: "https://www.amazon.com/Innisfree-Blueberry-Rebalancing-Cleanser-100ml/dp/B019IHFR62/ref=sr_1_1_a_it?ie=UTF8&qid=1535087664&sr=8-1&keywords=Innisfree+Blueberry+Rebalancing+5.5+Cleanser",
        ingredients: "Water, Sodium Cocoyl Isethionate, Diglycerin, Diethylhexyl Sodium Sulfosuccinate, Hydroxypropyl Starch Phosphate, Sodium Methyl Cocoyl Taurate, Benzyl Glycol, Citrus Aurantium Dulcis (Orange) Peel Oil, Potassium Cocoyl Glycinate, Potassium Cocoate, Citric Acid, Lavandula Angustifolia (Lavender) Oil, Sodium Chloride, Ethylhexylglycerin, Butylene Glycol, Allantoin, Disodium EDTA, Raspberry Ketone, 1, 2-Hexanediol, Vaaccinium Angustifolium (Blueberry) Fruit Extract, Poly C10-30 Alkyl Acrylate, Polyquaternium-67, Sodium Acetate, Isoporyl Alcohol",
        cosDNALink: "http://www.cosdna.com/eng/product.php?q=Innisfree+Blueberry+Rebalancing+5.5+Cleanser",
        skincarismaLink: "https://www.skincarisma.com/products/innisfree/blueberry-rebalancing-5-5-cleanser",
        isActive: false
    }, {
        name: "Cosrx Good Morning Gel Cleanser",
        skin: ["normal"],
        img: "/dist/img/cosrxgoodmorning.jpg",
        amazon: "https://www.amazon.com/COSRX-Good-Morning-Cleanser-150ml/dp/B016NRXO06/ref=sr_1_2_a_it?ie=UTF8&qid=1535087205&sr=8-2&keywords=Cosrx+Good+Morning+Gel+Cleanser",
        notAmazonStore: "Jolse",
        notAmazonURL: "http://jolse.com/product/detail.html?product_no=6250&cate_no=25&display_group=1",
        ingredients: "Water, Cocamidopropyl Betaine, Sodium Lauroyl Methyl Isethionate, Polysorbate 20, Styrax Japonicus Branch/Fruit/Leaf Extract, Butylene Glycol, Saccharomyces Ferment, Cryptomeria Japonica Leaf Extract, Nelumbo Nucifera Leaf Extract, Pinus Palustris Leaf Extract, Ulmus Davidiana Root Extract, Oenothera Biennis (Evening Primrose) Flower Extract, Pueraria Lobata Root Extract, Melaleuca Alternifolia (Tea Tree) Leaf Oil, Allantoin, Caprylyl Glycol, Ethylhexylglycerin, Betaine Salicylate, Citric Acid, Ethyl Hexanediol, 1,2-Hexanediol, Trisodium Ethylenediamine Disuccinate, Sodium Benzoate, Disodium EDTA",
        cosDNALink: "http://www.cosdna.com/eng/product.php?q=Cosrx+Good+Morning+Gel+Cleanser",
        skincarismaLink: "https://www.skincarisma.com/products/cosrx/low-ph-good-morning-cleanser",
        isActive: false
    }, {
        name: "ACWELL PH Balancing Bubble Cleanser",
        skin: ["dry"],
        img: "/dist/img/acwellbubble.jpeg",
        amazon: "https://www.amazon.com/ACWELL-Bubble-Balancing-Cleanser-150ml/dp/B00OR977RE/ref=sr_1_2_a_it?ie=UTF8&qid=1535087340&sr=8-2&keywords=acwell+5.5",
        notAmazonStore: "SokoGlam",
        notAmazonURL: "https://sokoglam.com/products/acwell-bubble-free-ph-balancing-cleanser",
        ingredients: "Water, PEG-7 Glyceryl Cocoate, Dipropylene Glycol, Alcohol, PEG-11 Methyl Ether Dimethicone, Benzyl Alcohol, Acrylic acid/Phosphorylcholine Glycol Acrylate Crosspolymer, Triethanolamine, Aloe Barbadensis Leaf Juice, Centella Asiatica Extract, Hamamelis Virginiana (Witch Hazel) Extract, Dehydroacetic Acid, Dipotassium Glycyrrhizate, Disodium EDTA, Glycyrrhiza Glabra (Licorice) Root Extract, Paeonia Albiflora Root Extract, Cimicifuga Dahurica Root Extract, Pueraria Lobata Root Extract, Salicylic Acid, Farnesyl Acetate, Farnesol, Panthenyl Triacetate, Fragrance",
        cosDNALink: "http://www.cosdna.com/eng/product.php?q=ACWELL+PH+Balancing+Bubble+Cleanser",
        skincarismaLink: "https://www.skincarisma.com/products/acwell/bubble-free-ph-balancing-cleanser",

        isActive: false
    }],
    hydratingToners: [{
        name: "Hada Labo Gokujyn Hyaluronic Acid Lotion",
        skin: ["oily"],
        img: "/dist/img/hadalabolotion.jpg",
        amazon: "https://www.amazon.com/Hada-Labo-Hadalabo-Gokujun-Hyaluronic/dp/B00BSNBO9O/ref=sr_1_2_a_it?rps=1&ie=UTF8&qid=1535087456&sr=8-2&keywords=Hada+Labo+Gokujyn+Hyaluronic+Acid+Lotion&refinements=p_85%3A2470955011",
        notAmazonStore: "Yes Style",
        notAmazonURL: "https://www.yesstyle.com/en/mentholatum-hada-labo-goku-jyun-hyaluronic-acid-lotion-moist-170ml/info.html/pid.1061871297",
        ingredients: "Water, Butylene Glycol, Glycerin, Disodium Succinate, Hydrolyzed Hyaluronic Acid, Hydroxyethlcellulose, Methylparaben, PPG-10 Methyl Glucose Ether, Sodium Acetylated Hyaluronate, Sodium Hyaluronate, Succinic Acid ",
        cosDNALink: "http://www.cosdna.com/eng/product.php?q=Hada+Labo+Gokujyn+Hyaluronic+Acid+Lotion",
        skincarismaLink: "https://www.skincarisma.com/products/hada-labo/gokujyn-hyaluronic-acid-lotion",
        isActive: false
    }, {
        name: "Kikumasamune sake high moist lotion",
        skin: ["combo", "oily", "dry", "normal"],
        img: "/dist/img/kikumasamune.jpg",
        amazon: "https://www.amazon.com/Kikumasamune-Sake-Skin-Lotion-Moisture/dp/B00ECQCVK0/ref=sr_1_1_a_it?ie=UTF8&qid=1535087922&sr=8-1&keywords=Kikumasamune+sake+high+moist+lotion",
        notAmazonStore: "Sasa",
        notAmazonURL: "http://web1.sasa.com/SasaWeb/eng/product/viewProductDetail.jspa?itemno=107326902002",
        ingredients: "Water, Glycerin, Butylene Glycol, Rice Ferment Filtrate (sake), Glutamate, Arginine, Leucine, Ceramide 3, Ceramide 6 II, Placenta Extract, Arbutin, Glycyrrhizic Acid, Soy Protein, Maltitol, Methyl Gluceth-10, Peg-60 Hydrogenated Castor Oil, Hydroxyethyl Cellulose, Alkyl Styrene/acrylic Acid Copolymer, Citric Acid, Sodium Citrate, Phenoxyethanol, Methylparaben, Fragrance",
        cosDNALink: "http://www.cosdna.com/eng/product.php?q=Kikumasamune+sake+high+moist+lotion",
        skincarismaLink: "https://www.skincarisma.com/products/kiku-masamune/sake-skin-lotion-high-moisture",
        isActive: false
    }, {
        name: "Dr. Jart+ Ceramidin Liquid",
        skin: ["combo"],
        img: "/dist/img/drjartliquid.jpg",
        amazon: "https://www.amazon.com/Dr-Jart-Ceramidin-Liquid-Ounce/dp/B00AMANH58/ref=sr_1_2_a_it?ie=UTF8&qid=1535089255&sr=8-2&keywords=Dr.+Jart%2B+Ceramidin+Liquid",
        notAmazonStore: "Sephora",
        notAmazonURL: "https://www.sephora.com/product/ceramidin-tm-liquid-P434364?skuId=2077832&keyword=Dr.%20Jart%20Ceramidin%20Liquid",
        ingredients: "Water, Glycerin, Methylpropanediol, Alcohol, Betaine, Glycosyl Trehalose, Pentylene Glycol, Erythritol, Hydrogenated Starch Hydrolysate, Caprylic/Capric Triglyceride, Cyclopentasiloxane, Dimethiconol, Phenoxyethanol, Tocopheryl Acetate, Panthenol, PEG-40 Hydrogenated Castor Oil, Bifida Ferment Lysate, Butylene Glycol, Acrylates/C10-30 Alkyl Acrylate Crosspolymer, Centella Asiatic Extract, Ficus Carica (Fig) Fruit Extract, Tromethamine, Polysorbate 60, Hydrogenated Lecithin, Portulaca Oleracea Extract, Pueraria Thunbergiana Root Extract, Cnidium Officinale Root Extract, Glycyrrhiza Glabra (Licorice) Root Extract, Paeonia Lactiflora Root Extract, Amaranthus Caudatus Seed Extract, Ulmus Davidiana Root Extract, Ethylhexylglycerin, Benzophenone-4, Dipotassium Glycyrrhizate, Soluble Collagen, Carbomer, Disodium EDTA, Steareth-21, Aloe Barbadensis Leaf Juice, Ceramide NP, 1, 2-Hexanediol, Cellulose Gum, Cetyl Alcohol, Steareth-2, Isohexadecane, Caramel, Citrus Auranthium Bergamia (Bergamot) Fruit Oil, Pelargonium Graveolens Flower Oil, Stearic Acid, Sodium Hyaluronate, Cholesterol, Propylene Glycol, PEG-30 Dipolyhydroxystearate, Xanthan Gum, Acacia Senegal Gum, Salvia Officinalis (Sage) Oil, Pogostemon Cablin Oil, Acetic Acid, Lactic Acid, Glyceryl Polymethacrylate.",
        cosDNALink: "http://www.cosdna.com/eng/product.php?q=r.+Jart%2B+Ceramidin+Liquid",
        skincarismaLink: "https://www.skincarisma.com/products/dr-jart/ceramidin-liquid",
        isActive: false
    }, {
        name: "CEZANNE Skin Conditioner High Moist",
        skin: ["normal"],
        img: "/dist/img/cezanne.jpg",
        amazon: "https://www.amazon.com/Japan-Health-Beauty-Humidity-conditioner/dp/B00RWMHTU8/ref=sr_1_1_a_it?ie=UTF8&qid=1535088049&sr=8-1&keywords=CEZANNE+Skin+Conditioner+High+Moist",
        notAmazonStore: "Yes Style",
        notAmazonURL: "https://www.yesstyle.com/en/cezanne-skin-conditioner-high-moist-500ml/info.html/pid.1059432890",
        ingredients: "Water, Glycerin, Butylene Glycol, Coix Lacryma-Jobi Ma-yuen Seed Extract, Ceramide AP, Ceramide NP, Ceramide EOP, Phytospingosine, Sodium Hyaluronate, Sodium Acetylated Hyaluronate, Hydrolyzed Hyaluronic Acid, Succinoyl Atelocollagen, Glycine Soja (Soybean) Seed Extract, Glutamic Acid, Aloe Barbadensis Leaf Juice, Citrus Limon (Lemon) Fruit Extract, Pinus Sylvestris Cone Extract, Equisetum Arvense Extract, Sodium PCA, Serine, Lysine, Glycine, Alanine, Arginine, Threonine, Proline, Cholesterol, Betaine, Allantoin, Sorbitol, Citric Acid, Sodium Citrate, Sodium EDTA, Hydroxyethylcellulose, Xanthan Gum, Sodium Lauroyl Lactylate, Carbomer, Styrene/VP Copolymer, Methylparaben, Propylparaben",
        cosDNALink: "http://www.cosdna.com/eng/product.php?q=CEZANNE+Skin+Conditioner+High+Moist",
        skincarismaLink: "https://www.skincarisma.com/products/cezanne/skin-conditioner-high-moist",
        isActive: false
    }, {
        name: "Klairs Supple Preparation Toner",
        skin: ["dry"],
        img: "/dist/img/klairssupple.jpg",
        amazon: "https://www.amazon.com/Preparation-moisturizer-without-paraben-alcohol/dp/B00PGOFYG0/ref=sr_1_1_a_it?ie=UTF8&qid=1535088349&sr=8-1&keywords=Klairs+Supple+Preparation+Toner",
        notAmazonStore: "Soko Glam",
        notAmazonURL: "https://sokoglam.com/products/klairs-supple-preparation-facial-toner-180ml",
        ingredients: "Water, Butylene Glycol, Dimethyl Sulfone, Betaine, Caprylic/Capric Triglyceride, Natto Gum, Sodium Hyaluronate, Disodium EDTA, Centella Asiatica Extract, Glycyrrhiza Glabra (Licorice) Root Extract, Polyquaternium-51, Chlorphenesin, Tocopheryl Acetate, Carbomer, Panthenol, Arginine, Luffa Cylindrica Fruit/Leaf/Stem Extract, Beta-Glucan, Althaea Rosea Flower Extract, Aloe Barbadensis Leaf Extract, Hydroxyethylcellulose, Portulaca Oleracea Extract, Lysine HCL, Proline, Sodium Ascorbyl Phosphate, Acetyl Methionine, Theanine, Lavandula Angustifolia (Lavender) Oil, Eucalyptus Globulus Leaf Oil, Pelargonium Graveolens Flower Oil, Citrus Limon (Lemon) Peel Oil, Citrus Aurantium Dulcis (Orange) Peel Oil, Cananga Odorata Flower Oil, Copper Tripeptide-1",
        cosDNALink: "http://www.cosdna.com/eng/product.php?q=Klairs+Supple+Preparation+Toner",
        skincarismaLink: "https://www.skincarisma.com/products/klairs/supple-preparation-facial-toner",
        isActive: false
    }],
    moisturizers: [{
        name: "Etude House Moistfull Collagen Water Jelly Cream",
        skin: ["oily"],
        img: "/dist/img/moistfullcollagen.jpg",
        amazon: "https://www.amazon.com/Etude-House-Moistfull-Collagen-Water/dp/B01HYI0X70/",
        notAmazonStore: "Etude House",
        notAmazonURL: "https://www.etudehouse.com/int/en/index.php/moistfull-collagen-water-jelly-cream.html",
        ingredients: "Hydrolyzed Collagen, Water, Propanediol, Butylene Glycol, Dipropylene Glycol, Adansonia Digitata Fruit Extract, Adansonia Digitata Seed Oil, Spirulina Platensis Extract, Menthoxypropanediol, Biosaccharide Gum-1, Glycerin, Glyceryl Polymethacrylate, Caprylyl Glycol, Sodium Acrylate/Vinyl Alcohol Copolymer, Acrylates/C10-30 Alkyl Acrylate Crosspolymer, Poloxamer 407, Ammonium Acryloyldimethyltaurate/Vp Copolymer, Polysorbate 20, Hexanediol, Sodium Acrylic Acid/Ma Copolymer, Phytantriol, Alcohol, Tromethamine, Disodium Edta, Phenoxyethanol, Fragrance",
        cosDNALink: "http://www.cosdna.com/eng/product.php?q=Etude+House+Moistfull+Collagen+Water+Jelly+Cream",
        skincarismaLink: "https://www.skincarisma.com/products/etude-house/moistfull-collagen-water-jelly-cream",
        isActive: false
    }, {
        name: "Tony Moly Chok Chok Watery Green Tea Cream",
        skin: ["oily"],
        img: "/dist/img/chokchok.jpg",
        amazon: "https://www.amazon.com/TONYMOLY-Chok-Green-Watery-Cream/dp/B071X3P6XZ/ref=sr_1_2_a_it?ie=UTF8&qid=1535090270&sr=8-2&keywords=tony+moly+chok+chok+watery+cream",
        notAmazonStore: "Jolse",
        notAmazonURL: "http://jolse.com/product/detail.html?product_no=10655&cate_no=46&display_group=1",
        skincarismaLink: "https://www.skincarisma.com/products/tonymoly/the-chok-chok-green-tea-watery-moisture-cream",
        cosDNALink: "http://www.cosdna.com/eng/product.php?q=Tony+Moly+Chok+Chok+Watery+Green+Tea+Cream",
        ingredients: "Camellia Sinensis Leaf Extract, Cyclomethicone, Propanediol, Glycerin, Glycereth-26 Pantaerythrityl Teraethylhexanoate Buthylene Glycol Dicaprylate/Dicaprate Sorbitan Olivate Cetearyl Olivate 1,2-Hexanediol Polyacrylate Crosspolymer-6 Polysilicone-11 Phytosterly/Octyldodecyl Lauroyl Glutamate Ammonium Acryloyldimethyltaurate/VP Copolymer Aniba Rosaeodora (Rosewood) Wood Oil Citrus Limon (Lemon) Seed Oil Disodium EDTA 3-O-Ethyl Ascorbic Acid",

        isActive: false
    }, {
        name: "Rosette Ceramide Gel",
        skin: ["combo"],
        img: "/dist/img/rosetteceramide.jpg",
        amazon: "https://www.amazon.com/ROSETTE-Skin-Care-Aqua-Ceramide/dp/B000FQNIX0/ref=sr_1_1_a_it?ie=UTF8&qid=1535090295&sr=8-1&keywords=Rosette+Ceramide+Gel",
        notAmazonStore: "ebay: kabukicatjapan (98.6%)",
        notAmazonURL: "https://www.ebay.com/itm/Rosette-Aqua-Ceramide-Gel-80g-Collagen-Hyaluronic-Acid-Sensitive-Skin-Free-ship/282310054829?hash=item41bafd93ad:g:Ks8AAOSwPCVX3js~",
        skincarismaLink: "https://www.skincarisma.com/products/rosette/ceramide-gel",
        cosDNALink: "http://www.cosdna.com/eng/product.php?q=Rosette+Ceramide+Gel",
        ingredients: "Water (Purified Water), BG, Glycerin, Betaine, Macadamia Nut Oil, PEG -400, Imperata Cylindrica Root Extract, PVM/MA Decadiene Crosspolymer, Sodium Lauroyl Lactylate, Ceramide 1, Ceramide 3, Ceramide 6II, Phytosphingosine, Cholesterol, Soluble Collagen, Sodium Hyaluronate, Potassium Hydroxide, Xanthane Gum, PEG -8, Carbomer, Parabens",
        isActive: false
    }, {
        name: "Dr. Jart+ Ceramidin Cream",
        skin: ["combo"],
        img: "/dist/img/drjartcream.jpg",
        amazon: "https://www.amazon.com/Dr-Jart-Ceramidin-Cream-Ounce/dp/B015RYQBIS/ref=sr_1_3_a_it?ie=UTF8&qid=1535091157&sr=8-3&keywords=Dr.+Jart%2B+Ceramidin+Cream",
        notAmazonStore: "Sephora",
        notAmazonURL: "https://www.sephora.com/product/ceramidin-tm-cream-P434363?skuId=2077840&keyword=Dr.%20Jart%2B%20Ceramidin%20Cream",
        ingredients: "Water/Aqua/Eau, Glycerin, Dipropylene Glycol, Caprylic/Capric Triglyceride, Hydrogenated Poly(C6-14 Olefin), Hydrogenated Polydecene, Cetearyl Alcohol,1,2-Hexanediol, Dimethicone, Cyclomethicone, Vegetable Oil, Bifida Ferment Lysate, Glyceryl Stearate SE, Dimethiconol, Cyclopentasiloxane, Ulmus Davidiana Root Extract, Amaranthus Caudatus Seed Extract, Piper Methysticum Leaf/Root/Stem Extract, Beta Vulgaris (Beet) Root Extract, Algae Extract, Artemisia Vulgaris Extract, Portulaca Oleracea Extract, Pueraria Thunbergiana Root Extract, Glycyrrhiza Glabra (Licorice) Root Extract, Paeonia Lactiflora Root Extract, Cnidium Officinale Root Extract, Hydrogenated Lecithin, Sodium Hyaluronate, Citrus Aurantium Bergamia (Bergamot) Fruit Oil, Soluble Collagen, Pelargonium Graveolens Flower Oil, Aloe Barbadensis Leaf Juice, Salvia Officinalis (Sage) Oil, Pogostemon Cablin Oil, Cetearyl Glucoside, Cetearyl Olivate, Sorbitan Olivate, C12-16 Alcohols, Ceramide 3, Microcrystalline Cellulose, Hydroxyethyl Acrylate/Sodium Acryloyldimethyl Taurate, Copolymer, Squalane, Glyceryl Stearate,Peg-100 Stearate, Hydrolyzed Corn Starch, Palmitic Acid, Coco-Caprylate/Caprate, Polysorbate 60, Caramel, Cellulose Gum, Propylene Glycol, Butylene Glycol, Disodium EDTA, Panthenol, Acacia Senegal Gum, Folic Acid, Acetic Acid, Cholesterol, Raffinose, Lactic Acid, Xanthan Gum, Tromethamine, Palmitoyl Pentapeptide-4",
        cosDNALink: "http://www.cosdna.com/eng/product.php?q=Dr.+Jart%2B+Ceramidin+Cream",
        skincarismaLink: "https://www.skincarisma.com/products/dr-jart/ceramidin-cream",
        isActive: false
    }, {
        name: "Belif Aqua Bomb",
        skin: ["normal"],
        img: "/dist/img/aquabomb.jpg",
        amazon: "https://www.amazon.com/belif-True-Cream-Aqua-Korean/dp/B00H4GOAZO/ref=sr_1_1_a_it?ie=UTF8&qid=1535091220&sr=8-1&keywords=Belif+Aqua+Bomb",
        notAmazonStore: "Jolse",
        notAmazonURL: "http://www.testerkorea.com/Product/l-belif-the-true-cream-aqua-bomb-75ml_35474",
        ingredients: "Water, Dipropylene Glycol, Glycerin, Methl Trimethicone, Alcohol Denat, Dimethicone, Cyclopentasiloxane, 1,2-Hexanediol, Malakite Extract, Caprylic/Capric Triglyceride, Pentaerythrityl Tetraethylhexanoate, PEG/PPG/Polybutylene Glycol-8/5/3 Glycerin, Alchemilla Vulgaris Leaf Extract*, Equisetum Arvense Leaf Extract*, Stellaria Media (Chickweed) Extract*, Urtica Dioica (Nettle) Leaf Extract*, Plantago Lanceolata Leaf Extract*, Avena Sativa (Oat) Kernel Extract**, Calendula Officinalis Flower Extract**, Nepeta Cataria Extract**, Rubus Idaeus (Raspberry) Leaf Extract**, Baptisia Tinctoria Root Extract**, Dimethiconol, Polymethylsilsesquioxane, Sodium Acrylate/Acryloyldimethyltaurate/Dimethylacrylamide Crosspolymer, Isohexadecane, Polysorbate 60, Ceramide 3, Cholesterol, Butyrospermum Parkii (Shea) Butter, Phenl Trimethicone, Pentaerythrityl Tetraisostearate, Panthenol, Squalane, Triethylhexanoin, Macadamia Ternifolia Seed Oil, PEG-150, PEG-40 Hydrogenated Castor Oil, Acrylates/C10-30 Alkyl Acrylate Crosspolymer, C14-22 Alcohols, Arachidyl Glucoside, Hydrogenated Lecithin, PEG-100 Stearate, Stearic Acid, Glyceryl Stearate, Carbomer, Tromethamine, Trisodium EDTA, Fragrance+, Citronellol, Limonene, Citral, Geraniol, Linalool",
        cosDNALink: "http://www.cosdna.com/eng/product.php?q=Belif+Aqua+Bomb",
        skincarismaLink: "https://www.skincarisma.com/products/belif/the-true-cream-aqua-bomb",
        isActive: false
    }, {
        name: "Beauty of Joseon Dynasty Cream",
        skin: ["dry"],
        amazon: "https://www.amazon.com/Joseon-Beauty-Dynasty-Wrinkles-Dryness/dp/B01M4GQO8W/ref=sr_1_2_a_it?ie=UTF8&qid=1535091305&sr=8-2&keywords=Beauty+of+Joseon+Dynasty+Cream",
        notAmazonStore: "Memebox",
        img: "/dist/img/dynasty.jpeg",
        notAmazonURL: "https://us.memebox.com/product/5315/dynasty-cream",
        ingredients: "Water, Butylene Glycol, Niacinamide, Dipentaerythrityl Hexa C5-9 Acid Esters, Hyaluronic Acid, Xanthan Gum, Cyclopentasiloxane, Cyclohexasiloxane, Polyacrylate-13, Polyisobutene, Polysorbate 20, Hydrogenated Lecithin C14-28 Alkyl Acid, Stearyl Alcohol, Behenyl Alcohol, Dimethicone/Vinyl Dimethicone Crosspolymer, Dimethicone, Adenosine, Glyceryl Stearate SE, Cetearyl Alcohol, Polyglyceryl-3 Methylglucose Distearate, Cetyl Peg/Ppg-10/1 Dimethicone, Stearic Acid, Tocopheryl Acetate, Sodium Polyacrylate, Olea Europaea (Olive) Fruit Oil, Helianthus Annuus (Sunflower) Seed Oil, Centella Asiatica Extract, Hippophae Rhamnoides Oil, EGF 2-Nano, Argania Spinosa Kernel Oil, Butyrospermum Parkii (Shea) Butter, Ceramide 3, Trehalose, Calendula Officinalis Flower Extract, Caprylhydroxamic Acid, 1, 2-Hexanediol, Raphanus Sativus (Radish) Leaf Extract, Oryza Sativa (Rice) Bran Extract, Cucurbitaceae (Gourd) Extract, Orchid Extract, Panax Ginseng Root Extract, Carthamus Tinctorius (Safflower) Seed Oil, Butyrospermum Parkii (Shea) Butter, Phytosphingosine, Ceteareth-20, Glyceryl Citrate/Lactate/Linoleate/Oleate, Fragrance, Honey",
        cosDNALink: "http://www.cosdna.com/eng/product.php?q=Beauty+of+Joseon+Dynasty+Cream",
        skincarismaLink: "https://www.skincarisma.com/products/beauty-of-joseon/dynasty-cream",
        isActive: false
    }, {
        name: "Benton Snail Bee High Content Steam Cream",
        skin: ["dry", "normal"],
        img: "/dist/img/bentonsnail.jpg",
        amazon: "https://www.amazon.com/s/?ref=nb_sb_noss_2?url=search-alias%3Daps&field-keywords=Benton+Snail+Bee+High+Content+Steam+Cream&rh=i%3Aaps%2Ck%3ABenton+Snail+Bee+High+Content+Steam+Cream",
        notAmazonStore: "Jolse",
        notAmazonURL: "http://jolse.com/product/detail.html?product_no=8684&cate_no=102&display_group=1",
        ingredients: "Snail Secretion Filtrate, Glycerin, Butylene Glycol, Cetyl Ethylhexanoate, Cetearyl Olivate, Sorbitan Olivate, Sodium Hyaluronate, Niacinamide, Stearic Acid, Behenyl Alcohol, Phytosqualene, Human Ogliopeptide-1, Bee Venom, Arbutin, Adenosine, Helianthus Annus (Sunflower) Seed Oil, Carthamus Tinctorius (Safflower) Seed Oil, Argania Spinosa Kernal Oil, Glyceryl Stearate, Arginine, Carbomer, Urea, Tocopher Leaf Extract, Salix Alba (Willow Bark) Extract, Ulmus Campestris (Elm) Extract, Pentylene Glycol, Zanthoxylum Piperitum Fruit Extract, Pilsatilla Koreana Extract, Usnea Barbata (Lichen) Extract",
        cosDNALink: "http://www.cosdna.com/eng/product.php?q=Benton+Snail+Bee+High+Content+Steam+Cream",
        skincarismaLink: "https://www.skincarisma.com/products/benton/snail-bee-high-content-steam-cream",
        isActive: false
    }],
    sunscreen: [{
        name: "Biore UV Aqua Rich Watery Essence SPF 50+ PA++++",
        skin: ["oily", "combo", "normal"],
        img: "/dist/img/biorerich.jpg",
        amazon: "https://www.amazon.com/2017ver-Sarasara-Watery-Essence-Sunscreen/dp/B071X4W74G",
        notAmazonStore: "Yes Style",
        notAmazonURL: "https://www.yesstyle.com/en/kao-biore-uv-aqua-rich-watery-essence-spf-50-pa-2017-edition-50g/info.html/pid.1033325971",
        ingredients: "Ethylhexyl Methoxycinnamate, Cross-polymer Of (lauryl Methacrylate / Sodium Methacrylate), Alkyl Benzoate (C12-15), Bisethylhexyloxyphenol Methoxyphenyl Triazine, Hexyl Diethylaminohydroxybenzoylbenzoate, Dimethicone, Ethylhexyl Triazone , Dimethylsilylated Silica, DPG, Xylitol, Dextrin Palmitate, (acrylates / Alkyl (C10-30)) Crosspolymer, (dimethicone / Vinyldimethicone) Crosspolymer, Polysilicone-9, Glyceryl Stearate, AMP, Vinyl Dimethicone / Methicone Silsesquioxane) Crosspolymer, Agar, Isoceteth-20, Alkyl (C30-45) Methicone, Polyvinyl Alcohol, Olefin (C30-45), Sodium Hydroxide BG, PG, Hyaluronic Acid Na, Royal Jelly, Orange Fruit Extract, Grapefruit Fruit Extract, Lemon Fruit Extract, Phenoxyethanol, EDTA-2Na, BHT, Perfume",
        cosDNALink: "http://www.cosdna.com/eng/product.php?q=Biore+UV+Aqua+Rich+Watery+Essence",
        skincarismaLink: "https://www.skincarisma.com/products/biore/uv-aqua-rich-watery-essence-spf50-pa-2017-version",
        isActive: false
    }, {
        name: "Etude House Sunprise Mild Watery Light SPF50+ PA+++",
        skin: ["oily", "combo"],
        img: "/dist/img/sunprise.jpg",
        amazon: "https://www.amazon.com/Etude-House-Sunprise-Watery-Light/dp/B00X3QMH2M/ref=sr_1_2_a_it?ie=UTF8&qid=1535093097&sr=8-2&keywords=Etude+House+Sunprise+Mild+Watery+Light+SPF50%2B+PA%2B%2B%2B",
        notAmazonStore: "Jolse",
        notAmazonURL: "http://jolse.com/product/etude-house-sunprise-mild-watery-light-50g/5157/?cate_no=50&display_group=1",
        ingredients: "Water Ethylhexyl Methoxycinnamate, Homosalate, Ethylhexyl Salicylate, Diethylamino Hydroxybenzoyl Hexyl Benzoate, Alcohol, Butylene Glycol, Dicaprylyl Carbonate, Cyclopentasiloxane, Octocrylene, C20-22 Alkyl Phosphate, C20-22 Alcohols, Silica, 1,2-Hexanediol, Cetyl Alcohol, Viscum Album (Mistletoe) Leaf Extract, Portulaca Oleracea Extract, Centella Asiatica Extract, Glyceryl Stearate, Methyl Methacrylate Crosspolymer, Tromethamine, Dimethicone/Vinyl Dimethicone Crosspolymer, Phenoxyethanol, Octyldodecanol, Polyacrylate Crosspolymer-6, Opuntia Ficus-Indica Extract, Aloe Barbadensis Leaf Juice, Glycine Soja (Soybean) Lipids, Microcrystalline Cellulose, Xanthan Gum, Sodium Acrylate/Sodium Acryloyldimethyl Taurate Copolymer, Polyisobutene, Carex Humillis Root Extract, Citrus Aurantium Bergamia (Bergamot) Fruit Oil, Citrus Limon (Lemon) Peel Oil, Eucalyptus Globulus Leaf Oil, Pinus Sylvestris Leaf Oil, Citrus Aurantifolia (Lime) Oil, Citrus Aurantium Dulcis (Orange) Peel Oil, Echium Plantagineum Seed Oil, Euterpe Oleracea Fruit Extract, Malpighia Emarginata (Acerola) Fruit Extract, Terminalia Ferdinandiana Fruit Extract, Cellulose Gum, Adansonia Digitata Seed Oil, Hyaluronic Acid, Sorbitan Oleate, Caprylyl/Capryl Glucoside, Helianthus Annuus (Sunflower) Seed Oil, Cardiospermum Halicacabum Flower/Leaf/Vine Extract, Helianthus Annuus (Sunflower) Seed Oil Unsaponifiables, Isoceteth-10, Isoceteth-25",
        cosDNALink: "http://www.cosdna.com/eng/product.php?q=Etude+House+Sunprise+Mild+Watery+Light",
        skincarismaLink: "https://www.skincarisma.com/products/etude-house/sunprise-mild-watery-light",
        isActive: false
    }, {
        name: "Biore UV Aqua Rich Watery Gel SPF 50+ PA++++",
        skin: ["dry"],
        img: "/dist/img/bioreuv.jpg",
        amazon: "https://www.amazon.com/Biore-Smooth-Watery-Summer-Limited/dp/B01G11QB8Q/ref=sr_1_5_a_it?ie=UTF8&qid=1535093143&sr=8-5&keywords=Biore+UV+Aqua+Rich+Watery+Essence+SPF+50%2B+PA%2B%2B%2B%2B",
        notAmazonStore: "Yes Style",
        notAmazonURL: "https://www.yesstyle.com/en/kao-biore-uv-aqua-rich-watery-gel-spf-50-pa-2017-edition-90ml/info.html/pid.1057651156",
        skincarismaLink: "https://www.skincarisma.com/products/biore/uv-aqua-rich-watery-gel-spf50-pa",
        cosDNALink: "http://www.cosdna.com/eng/product.php?q=Biore+UV+Aqua+Rich+Watery+Gel",
        ingredients: "Water, Ethanol, Ethylhexyl Methoxycinnamate, (lauryl Methacrylate / Methacrylic Acid Na) Crosspolymer, Alkyl Benzoate (C12-15), Bis-ethylhexyloxyphenol Methoxyphenyl Triazine, Diethylamino Hydroxybenzoyl Hexyl Benzoate, Dimethicone, Ethylhexyl Triazone Dimethylsilyl Silica, DPG, Xylitol, Dextrin Palmitate, (acrylates / Alkyl Acrylate (C10-30)) Crosspolymer, (dimethicone / Vinyl Dimethicone) Crosspolymer, Polysilicone-9, Glyceryl Stearate, AMP, ( Vinyl Dimethicone / Methicone Silsesquioxane) Crosspolymer, Agar, Isoceteth -20, Alkyl (C30-45) Methicone, Polyvinyl Alcohol, Olefin (C30-45), Hydroxide Na BG, PG, Hyaluronic Acid Na, Royal Jelly, Orange Fruit Extract, Grapefruit Fruit Extract, Lemon Fruit Extract, Phenoxyethanol, EDTA-2Na, BHT, Fragrance.",
        isActive: false
    }, {
        name: "Missha All Around Safe Block Waterproof SUN SPF50 PA+++",
        skin: ["dry", "normal"],
        amazon: "https://www.amazon.com/MISSHA-All-around-Block-Waterproof-SPF50/dp/B00EBZCI9Q/ref=sr_1_6_a_it?ie=UTF8&qid=1535093387&sr=8-6&keywords=Missha+All+Around+Safe+Block",
        notAmazonStore: "Missha",
        img: "/dist/img/misshaall.jpg",
        notAmazonURL: "https://www.misshaus.com/all-around-safe-block-waterproof-sun-spf50-pa.html",
        ingredients: "Water(Aqua), Cyclopentasiloxane, Titanium Dioxide (Nano), Zinc Oxide (Nano), Butylene Glycol, Cyclohexasiloxane, PEG-10 Dimethicone, Dicaprylyl Carbonate, Hydrogenated Poly(C6-14 Olefin), Cocos Nucifera (Coconut) Oil, Aluminum Hydroxide, Stearic Acid, Dimethicone, Sodium Chloride, Disteardimonium Hectorite, Beeswax, Dimethicone/Vinyl Dimethicone Crosspolymer, Cetyl PEG/PPG-10/1 Dimethicone, Glyceryl Caprylate, Polyhydroxystearic Acid, Coco-Caprylate/Caprate, Triethoxycaprylylsilane, Aloe Barbadensis Leaf Extract, Gnaphalium Leontopodium Flower Extract, Portulaca Oleracea Extract, Glycerin, Artemisia Vulgaris Extract, Chrysanthemum Morifolium Flower Extract, Cinnamomum Cassia Bark Extract, Diospyros Kaki Leaf Extract, Morus Alba Fruit Extract, Pueraria Lobata Root Extract, VP/Hexadecene Copolymer, 1,2-Hexanediol, Acrylates/Dimethicone Copolymer, Disodium EDTA, Chlorphenesin, Fragrance(Parfum) 0418",
        cosDNALink: "http://www.cosdna.com/eng/product.php?q=Missha+All+Around+Safe+Block+Waterproof+Sun",
        skincarismaLink: "https://www.skincarisma.com/products/missha/all-around-safe-block-waterproof-sun-spf50-pa",
        isActive: false
    }]
};
//# sourceMappingURL=productData.js.map

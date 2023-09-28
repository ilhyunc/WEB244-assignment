// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.
const { products, categories } = window;

// Variable to store the reference to the currently displayed popup container
let currentPopupContainer = null;

function main() {
  // Get the necessary DOM elements
  const categoryMenu = document.getElementById("category-menu");
  const productList = document.getElementById("products");
  const categoryTitle = document.getElementById("category");

  // Create category buttons
  categories.forEach((category) => {
    const button = document.createElement("button");
    button.textContent = category.description;
    button.addEventListener("click", () => showProductList(category));
    categoryMenu.appendChild(button);
  });

  // Show products for the default category (first category)
  showProductList(categories[0]);

  function showProductList(category) {
    // Update the selected category title
    categoryTitle.textContent = category.description;

    // Clear the current product rows
    productList.innerHTML = "";

    // Filter products based on the selected category and non-discontinued status
    const filteredProducts = products.filter((product) => {
      return product.categories.includes(category.id) && !product.discontinued;
    });

    // Create rows for each product
    filteredProducts.forEach((product) => {
      const row = document.createElement("tr");

      // Create table cells for product details
      const nameCell = document.createElement("td");
      const nameLink = document.createElement("a");
      nameLink.textContent = product.name;
      nameLink.href = "#";
      nameLink.addEventListener("click", () => showProductImagePopup(product));
      nameCell.appendChild(nameLink);

      const descriptionCell = document.createElement("td");
      descriptionCell.textContent = product.description;

      const priceCell = document.createElement("td");
      const formattedPrice = (product.price / 100).toLocaleString("en-CA", {
        style: "currency",
        currency: "CAD"
      });
      priceCell.textContent = formattedPrice;

      // Append cells to the row
      row.appendChild(nameCell);
      row.appendChild(descriptionCell);
      row.appendChild(priceCell);

      // Append the row to the product list
      productList.appendChild(row);
    });
  }

  function showProductImagePopup(product) {
    // Remove the existing popup container if it exists
    if (currentPopupContainer) {
      currentPopupContainer.remove();
    }

    const popupContainer = document.createElement("div");
    popupContainer.classList.add("popup-container");

    const popupContent = document.createElement("div");
    popupContent.classList.add("popup-content");

    const closeButton = document.createElement("span");
    closeButton.classList.add("close-button");
    closeButton.innerHTML = "&times;";
    closeButton.addEventListener("click", () => {
      popupContainer.remove();
    });

    const productImage = document.createElement("img");
    productImage.src = getProductImagePath(product); // Get the product image path based on the selected product
    productImage.alt = product.name;

    // Append elements to the popup
    popupContent.appendChild(closeButton);
    popupContent.appendChild(productImage);
    popupContainer.appendChild(popupContent);

    // Append the popup to the body
    document.body.appendChild(popupContainer);

    // Store a reference to the current popup container
    currentPopupContainer = popupContainer;
  }

  function getProductImagePath(product) {
    // Define the image path based on the selected product's name
    switch (product.name) {
      //category 1
      case "FAT TIRE":
        return "https://emmo.ca/cdn/shop/files/ParaloCBlack-Side.jpg?v=1686063913";
      case "STEP-THRU":
        return "https://emmo.ca/cdn/shop/products/vgobblack_d5790863-a118-4dbe-b93f-04736b4627c7_1.jpg?v=1652308489";
      case "MOUNTAIN":
        return "https://emmo.ca/cdn/shop/files/MontaC2Black-Side.jpg?v=1685830636";
      case "FOLDING":
        return "https://emmo.ca/cdn/shop/products/F7silver_a0abaa7e-4c54-491e-9c3a-b5ef95c3feea_8.jpg?v=1652308500";
      case "FULL SUSPENSION":
        return "https://emmo.ca/cdn/shop/products/Ultron1500x1000_1-2.jpg?v=1661812685";
      case "CARGO":
        return "https://cdn.shopify.com/s/files/1/0622/0660/7617/files/trobicc1000x567.jpg?v=1685450836";

      //category 2
      case "KNIGHT TURBO":
        return "https://cdn.shopify.com/s/files/1/0622/0660/7617/files/KnightTurboBlackPedal_-Side.jpg?v=1687543219";
      case "GANDAN TURBO":
        return "https://cdn.shopify.com/s/files/1/0622/0660/7617/files/GandanBlack_Pedal_-Side.jpg?v=1687563393";
      case "DX":
        return "https://cdn.shopify.com/s/files/1/0622/0660/7617/files/NewDXGrey_Pedal_-Side.jpg?v=1687465431";
      case "KAMEN":
        return "https://cdn.shopify.com/s/files/1/0622/0660/7617/files/KamenBlack_Pedal_-Side.jpg?v=1687798939";
      case "ZONE GTS":
        return "https://cdn.shopify.com/s/files/1/0622/0660/7617/products/ZoneSBlack1.jpg?v=1652314624";

      //category 3
      case "HORNET X":
        return "https://emmo.ca/cdn/shop/products/hornetxblack2.jpg?v=1652739492";
      case "ADO":
        return "https://emmo.ca/cdn/shop/products/AdoGrey1.jpg?v=1652738511";
      case "URBAN T2":
        return "https://emmo.ca/cdn/shop/products/UrbanTBlack1.jpg?v=1652741667";
      case "MONSTER S - 84V":
        return "https://emmo.ca/cdn/shop/products/MONS84VBLACK3.jpg?v=1652741253";
      case "MONSTER S - 72V":
        return "https://emmo.ca/cdn/shop/products/MONS72Vblack2.jpg?v=1652739898";
      case "HORNET 6.0":
        return "https://emmo.ca/cdn/shop/products/Hornetblack2.jpg?v=1652739358";
      case "KOOGO":
        return "https://emmo.ca/cdn/shop/files/KoogoBlack-Side.jpg?v=1687306729";
      case "GT84":
        return "https://emmo.ca/cdn/shop/products/GT84-black2.jpg?v=1652739238";

      //category 4
      case "T48":
        return "https://emmo.ca/cdn/shop/products/T48-red1_1acc6e09-c411-4c8d-847b-563ad40c007f_7.jpg?v=1652308221";
      case "ET-4 LS":
        return "https://emmo.ca/cdn/shop/products/ET4LS-BLACK.png?v=1680817704";
      case "ET-4 LX":
        return "https://emmo.ca/cdn/shop/products/ET-4-LX_withorwithoutbasket_-blue.png?v=1680816953";
      case "ET-4 CRUISE":
        return "https://emmo.ca/cdn/shop/products/ET-4-Cruise-GREY.png?v=1680815709";
      case "ET-4 COMPACT":
        return "https://emmo.ca/cdn/shop/products/ET4Compact-blue.png?v=1680812231";
      case "ET-4 CLASSIC":
        return "https://emmo.ca/cdn/shop/products/ET-4-Classicwithroof-BLUE.png?v=1680810781";
      case "ET-4 RIO":
        return "https://emmo.ca/cdn/shop/products/ET4Rio-GREY.png?v=1680808248";

      //category 5
      case "ET-3 LS":
        return "https://emmo.ca/cdn/shop/files/ET3-LS-Blue.jpg?v=1687466661";
      case "ET-3 LX":
        return "https://emmo.ca/cdn/shop/products/ET3LX-blue.png?v=1680803520";
      case "ET-3 ES":
        return "https://emmo.ca/cdn/shop/products/ET3ES-blue.png?v=1680729335";
      case "ET-3 COMMANDER":
        return "https://emmo.ca/cdn/shop/products/ET3Commander-blue.png?v=1680725387";
      case "ET-3 CITY":
        return "https://emmo.ca/cdn/shop/products/ET3City-black.png?v=1680721853";
      case "ET-3 CLASSIC":
        return "https://emmo.ca/cdn/shop/products/ET-3-Classic-grey.png?v=1680718895";

      //category 6
      case "HELMET 310":
        return "https://emmo.ca/cdn/shop/products/310-CF_0eb17303-ad27-4c66-9366-b8a149aca7c5_1.jpg?v=1652308401";
      case "HELMET 118":
        return "https://emmo.ca/cdn/shop/products/118-black_12bcc040-2bca-4387-bc81-8770d6ebbca7_5.jpg?v=1652308051";
      case "HELMET 128":
        return "https://emmo.ca/cdn/shop/products/128-mblack-1_6f4f9ab6-e22a-4444-be86-214d98d32de5_8.jpg?v=1677189516";
      case "HELMET 218":
        return "https://emmo.ca/cdn/shop/products/218-black_3535077d-4f4e-4c2f-9f5c-0bab3a5f86c1_9.jpg?v=1652308477";
      case "HELMET 202":
        return "https://emmo.ca/cdn/shop/products/202-black_63c66dd3-7f9e-41cf-a940-58118389c9d7_2.jpg?v=1652308397";
      case "48V-84V SLA CHARGER - UNIVERSAL PLUG":
        return "https://emmo.ca/cdn/shop/products/4814_36b11ad6-eb84-45b4-9306-48ee94ccf812_2.jpg?v=1652307977";
      case "LICENSE PLATE":
        return "https://emmo.ca/cdn/shop/products/license-plate.jpg?v=1664997046";
      case "ALARM CABLE LOCK":
        return "https://emmo.ca/cdn/shop/products/alarm-lock-1_44a564a3-0ce7-4b8b-bec2-352711f34278_1.jpg?v=1652308363";
      case "ALARM CHAIN LOCK":
        return "https://emmo.ca/cdn/shop/products/alarm-cable-lock-1_c7c3a94e-0a0c-42d4-a990-a6cb43f80b63_4.jpg?v=1652308192";
      case "CELLPHONE HOLDER":
        return "https://emmo.ca/cdn/shop/products/cellphone-holder-black_8204177a-ada7-4dfb-a7b0-5cb3bb076b77_0.png?v=1652308361";
      case "DELIVERY BAG":
        return "https://emmo.ca/cdn/shop/products/44-2_7adfbc9b-8734-44cc-8d5a-868d130843e9_6.jpg?v=1652308207";
    }
  }
}

// Event listener for DOMContentLoaded
document.addEventListener("DOMContentLoaded", main);

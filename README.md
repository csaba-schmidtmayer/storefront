# Storefront

This is the submission project code of the **Angular Fundamentals** course in Udacity's Full Stack JavaScript Developer Nanodegree Program.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.2.

## Using the application

### Starting the application

**Prerequisites:**
  - Angular CLI is installed globally on your machine. To install it, run `npm install -g @angular/cli`.

**Steps:**

  1. Clone this repository to your local machine.
  2. `cd` into the project folder.
  3. Install dependencies by running `npm install`.
  4. Start the development server by running `ng serve`.
  5. Open `http://localhost:4200/` in your browser.

### Exploring the application

Storefront is a single-page web application. It mocks the usage of a generic web store by allowing the user to view items, add or remove items to/from the shopping cart, and place an order by supplying the necessary personal information.

#### Navigation

1. The navigation bar at the top of the application can be used to navigate between the list of orderable items and the shopping cart.
2. Clicking on the photo of any item shows its details.

#### The product list

The product list shows all available items and their overview (photo, name, price). You can also directly add any product to the shopping cart from this page by setting the desired amount and clicking `Add to cart`. The amount is set back to zero and the button disabled after an item is successfully added to the cart to prevent the user from inadvertently add multiple batches through multiple clicks.

#### The product detail page

Each item has its dedicated detail page, where additional information can be read about it. You can add the item to the shopping cart by setting the desired amount and clicking `Add to cart`. Clicking the link *Back to the product list* takes you back to the Product list page.

#### The shopping cart

The shopping cart page lists the products placed in the cart, the amount, and the sub- and grand total of the cart value. You can adjust the amount of any product directly, or delete them by setting the amount to 0.

You can place the order by filling in the required personal information, then clicking `Send order`. You need to supply the following information:
  - Full name (at least six characters)
  - Address (at least 12 characters)
  - Credit card number (at least eight characters)

#### Order confirmation

Once the order is finalized and submitted, a confirmation page is shown that summarizes the most important information about the order.

## Credits

The data and the stylesheets in the application come from [the starter code of the project](https://github.com/udacity/nd-0067-c3-angular-fundamentals-project-starter).

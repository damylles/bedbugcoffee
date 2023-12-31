import axios from 'axios';

// this file holds your frontend network request adapters
// think about each function as a service that provides data
// to your React UI through AJAX calls

// for example, if we need to display a list of users
// we'd probably want to define a getUsers service like this:

export async function getProducts() {
  try {
    const { data: products } = await axios.get(
      `${process.env.REACT_APP_API_BASE_URL}/api/products`
    );
    return products;
  } catch (err) {
    console.error(err);
  }
}

export async function getAPIHealth() {
  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_BASE_URL}/api/health`
    );
    return data;
  } catch (err) {
    console.error(err);
    return { healthy: false };
  }
}

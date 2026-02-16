# React Image Gallery

> [!NOTE]
> *Insert your chosen description here. For example: An elegant, dark-themed photography browser powered by React and the Picsum API, featuring smooth asynchronous data fetching and a fully responsive grid layout.*

## ✨ Features

* **Dynamic Data Fetching:** Integrates with the [Picsum API](https://picsum.photos/) to fetch high-resolution images asynchronously.
* **Seamless Pagination:** Custom-built pagination controls (Next/Prev) to navigate through hundreds of photos effortlessly.
* **Loading States:** Intuitive UI feedback while data is being fetched over the network.
* **Responsive Design:** A fluid grid layout styled with Tailwind CSS that adapts to different screen sizes.
* **External Linking:** Clicking on an image card redirects the user to the original high-resolution source.

## 🛠️ Tech Stack

* **Frontend:** React 
* **Styling:** Tailwind CSS
* **HTTP Client:** Axios

## 📂 Project Structure

```text
src/
├── components/
│   ├── Buttons.jsx   # Handles pagination logic and UI
│   └── Cards.jsx     # Renders individual image cards and external links
├── App.jsx           # Main container, handles state and API calls
└── main.jsx/index.js # Entry point

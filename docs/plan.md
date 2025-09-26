# Blog App - Project Plan

## UI Plan

- [x] initialization
- [x] Header
  - [x] **Logo + App Name** (left side).
  - [x] **Navigation**: single item "Home" (center).
  - [x] **Search Bar**: input field to search for blog posts (right side).

##### Header should remain **fixed** on all pages.

- [x] Blog Listing Page (`/`)

  - [x] Grid layout to display **9 blog posts** at a time.
  - [x] 4 columns × 4 rows (responsive design for smaller screens).
  - [x] Each blog post should be displayed as a **card** containing:
  - [x] Blog **category** (Tech or Political, shown on top).
  - [x] Blog **title**.
  - [x] Author **image + name**.
  - [x] **Published date**.
  - [x] **Load More** button at the bottom to fetch more posts (pagination simulation).

- [x] Single Post Page (`/posts/:id`)

- [x] Display **full blog details**:
  - [x] Blog **category**.
  - [x] Blog **title**.
  - [x] Author **image + name**.
  - [x] **Published date**.
    - **Main article image**.
    - **Full blog content**.

##### Layout should keep the **header fixed**, with the blog content below it.

---

### Logic Plan

- [x] Data Source

  - Use **static/dummy data** or an external API (e.g. [JSONPlaceholder](https://jsonplaceholder.typicode.com/)) for posts.
  - Data structure for each post:

```json
{
  "id": 1,
  "title": "Sample Blog Title",
  "category": "Tech",
  "author": {
    "name": "John Doe",
    "image": "/images/john.jpg"
  },
  "date": "2025-09-20",
  "thumbnail": "/images/thumb1.jpg",
  "mainImage": "/images/post1.jpg",
  "content": "Full blog article text goes here..."
}
```

- [x] Routing

  - Implement routing using **React Router v6**.
  - [x] Routes:
    - `/` → Blog Listing Page.
    - `/posts/:id` → Single Post Page.
  - [x] **Dynamic routing**:
    - Clicking on a card navigates to `/posts/{id}`.
    - The corresponding post data is loaded based on the `id`.

- [x] Pagination / Load More

  - Initially load **9 posts**.
  - On clicking **Load More**, fetch or display the next set of posts.

  - Can be implemented with: - API calls with `?_limit` & `_page` parameters. - Or slicing static data in chunks.

- [x] Search Functionality

  - [x] Search bar in the header filters posts by **title** or **author name**.
  - [x] Should update the **Blog Listing** dynamically.
  - [x] put error when there's no match found.

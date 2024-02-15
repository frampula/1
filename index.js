/*       <article class="card-wrapper">
        <img class="card-image" src="https://i.pinimg.com/736x/84/aa/73/84aa73992b7c1dbcbac2ed662b1a880a.jpg" alt="John Avatar">
        <h2 class="username">John</h2>
        <p class="description">Description for John</p>
      </article> */

const johnObject = {
  id: 1,
  name: "John",
  description: "Description for John",
  profilePicture:
    "https://i.pinimg.com/736x/84/aa/73/84aa73992b7c1dbcbac2ed662b1a880a.jpg",
};

const root = document.querySelector("#root");

function createUserCard(user) {
  const article = document.createElement("article");
  article.classList.add("card-wrapper");

  const img = document.createElement("img");
  img.setAttribute("src", user.profilePicture);
  img.setAttribute("alt", user.name);
  img.classList.add("card-image");

  const h2 = document.createElement("h2");
  h2.append(user.name);
  h2.classList.add("username");

  const p = document.createElement("p");
  p.append(user.description);
  p.classList.add("description");

  article.append(img, h2, p);

  return article;
}

const cardArray = data.map((user) => createUserCard(user));

root.append(...cardArray)
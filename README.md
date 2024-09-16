# <p align="center">Pet Adoption Center API</p>

The Pet Adoption Center API is a RESTful web service designed to support pet adoption operations following SOLID principles. This API is built using node.js, express, with MongoDB as the database for managing and storing data.

### Languages and Tools:
<p align="left">
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a>
<a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/>
</a>
<a href="https://expressjs.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40"/> </a>
<a href="https://www.mongodb.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="40" height="40"/> </a>
</p>

## 💻Features    
- Manage pet records with CRUD (Create, Read, Update, Delete) functionalities, allowing users to add new pets, retrieve information, modify existing records, and remove pets from the database.

## 📁 SOLID File Structure:
```js
src/
  ├── controllers/
  │   └── petController.js
  ├── repositories/
  │   └── petRepository.js
  ├── services/
  │   └── petService.js
  ├── client.js
  └── server.js
```

## ⚙️ API Methods Reference

### Submit form
```http
POST /pets
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name`   | `string` | **Required**. Pet name    |
| `gender`  | `string` | **Required**. Pet gender   |
| `species`| `string` | **Optional**. Pet species |
| `breed`| `string` | **Optional**. Pet breed |
| `age`| `number` | **Optional**. Pet age |
| `status`| `bolean` | **Required**. Adoption status |
| `desc`| `string` | **Optional**. Pet behaviour description |
| `image_url`| `string` | **Optional**. Pet image |

### Get all pets
```http
GET /pets
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Content-Type` | `header` | **Required**. application/json |

### Update pet by ID
```http
UPDATE /pets/petId
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `petId` | `string` | **Required**. Pet id |

### Delete pet by ID
```http
DELETE /pets/petId
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `petId` | `string` | **Required**. Pet id |
        

## 👩‍💻 Author
#### Mayara Nicochelli
- Github: [@maynicochelli](https://github.com/maynicochelli)

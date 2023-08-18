# Template Handler

Template Handler is a Node.js application designed to handle templates for the Abrnoc company. It provides functionalities to manage categories and templates, allowing users to create, edit, delete, and retrieve templates associated with categories.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Database](#database)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/MostafaMoradi7/TemplateHandler.git
```

2. Navigate to the project directory:

```bash
cd TemplateHandler
```

3. Install dependencies:

```bash
npm install
```

4. Configure the database connection in `conf/database.js`:

```javascript
// conf/database.js
const { Sequelize } = require('sequelize');

const connection = new Sequelize({
  dialect: 'dialect',
  host: 'host',
  port: port,
  database: 'database',
  username: 'username',
  password: 'password',
});

module.exports = connection;
```

5. Start the server:

```bash
npm start
```

## Usage

The Abrnoc Template Handler provides a RESTful API for managing categories and templates. You can interact with the API using HTTP requests.

## Endpoints

### Categories

- `GET /category/showall`: Retrieve all categories.
- `GET /category/showroots`: Retrieve categories with their sub-categories.
- `PUT /category/edit/:name`: Edit a category.
- `POST /category/create`: Create a new category.

### Templates

- `GET /template/categories/:categoryName`: Retrieve templates by category.
- `GET /template/showall`: Retrieve all templates.
- `POST /template/create`: Create a new template.
- `PUT /template/:id`: Edit a template.
- `DELETE /template/:id`: Delete a template.

For detailed information on request and response formats, please refer to the API documentation.

## Database

The application uses a PostgreSQL database to store categories and templates. The database connection configuration is located in `conf/database.js`.

Categories and templates are defined as Sequelize models in the `models` directory.

## Contributing

Contributions are welcome! If you encounter any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request.

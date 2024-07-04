**Take-Home Assignment: Buildings List Application**

**Objective:** Create a high-quality application that displays a list of buildings. Assume the existing application was developed by a junior developer.

**Instructions:**

1. **Fetch Initial Data:** Update `API_ADDRESS` in `constants.jsx` to use a unique identifier of your choosing. This will ensure that the data you're working with is yours and not that of another candidate.
2. **Loading State:** Implement a loading state to handle the initial data fetch.
3. **Usability Improvements:** Address any usability issues you encounter while using the app.

**Time Estimate:** This task should take approximately 2-3 hours to complete.

To get started, run:

```shell
npm install
```
```shell
npm start
```
---
## API Endpoints Documentation

#### Get all buildings
- __Method__: `GET`
- __Endpoint__: `/<job-candidate-name>/buildings`
- __Example Return Structure(on success)__:
    ```json
    [
        {
            "city": null,
            "country": null,
            "id": 2,
            "name": "Nakatomi Plaza",
            "postal_zip_code": null,
            "street_address": "2121 Avenue of the Stars"
        },
        {
            "city": null,
            "country": null,
            "id": 3,
            "name": "Nakatomi Plaza",
            "postal_zip_code": null,
            "street_address": "2121 Avenue of the Stars"
        }
    ]
    ```

#### Add a building
- __Method__: `POST`
- __Endpoint__: `/<job-candidate-name>/buildings`
- __Request Body Parameters__: 
    - `street_address` (required) String
    - `name` (required) String
    - `country` (optional) String
    - `postal_zip_code` (optional) String
    - `street_address` (optional) String
- __Example Return Structure(on success)__:
    ```json
    {
        "id": <int: unique identifier of building>,
        "name": <string: name of building>,
        "street_address": <string: address of building>,
        "city": <string | nil: city in which building resides>,
        "postal_zip_code": <string | nil: name of building>,
        "country": <string | nil: country in which building resides>,
    }
    ```
- __Example Return Structure(on request error)__:
    ```json
    {
        "error": "Invalid request body"
    }
    ```
- __Example Return Structure(on field error)__:
    ```json
    {
        "errors": [
            {
                "field": "street_address",
                "message": "Expected street_address to be a non-empty string, got "
            }
        ]
    }    
    ```

#### Delete a building
- __Method__: `DELETE`
- __Endpoint__: `/<job-candidate-name>/buildings/<building-id>`
- __Example Return Structure(on success)__:
    ```json
    {
        "message": "Building deleted successfully!"
    }
    ```
- __Example Return Structure(on request error)__:
    ```json
    {
        "error": "Building <building-id> not found."
    }
    ```

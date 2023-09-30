
(function () {
    if (!window.indexedDB) {
        console.log(`Your browser doesn't support IndexedDB`);
        return;
    }

    const request = indexedDB.open('CRM', 1);

    request.onupgradeneeded = (event) => {
        let db = event.target.result;

        let store = db.createObjectStore('Contacts', {
            autoIncrement: true
        });

        // create an index on the email property
        let index = store.createIndex('email', 'email', {
            unique: true
        });
    };

    request.onerror = (event) => {
        console.error(`Database error: ${event.target.errorCode}`);
    };

    // handle the success event
    request.onsuccess = (event) => {
        const db = event.target.result;

        // insert contacts
        // insertContact(db, {
        //     email: 'john.doe@outlook.com',
        //     firstName: 'John',
        //     lastName: 'Doe'
        // });

        // insertContact(db, {
        //     email: 'jane.doe@gmail.com',
        //     firstName: 'Jane',
        //     lastName: 'Doe'
        // });


        // get contact by id 1
        // getContactById(db, 1);


        // get contact by email
        // getContactByEmail(db, 'jane.doe@gmail.com');

        // get all contacts
        // getAllContacts(db);

        deleteContact(db, 1);

    };

    function insertContact(db, contact) {
        // create a new transaction
        const txn = db.transaction('Contacts', 'readwrite');

        // get the Contacts object store
        const store = txn.objectStore('Contacts');
        //
        let query = store.put(contact);

        // handle success case
        query.onsuccess = function (event) {
            console.log(event);
        };

        // handle the error case
        query.onerror = function (event) {
            console.log(event.target.errorCode);
        }

        // close the database once the 
        // transaction completes
        txn.oncomplete = function () {
            db.close();
        };
    }



    // get the index from the Object Store
    const index = store.index('email');

        txn.oncomplete = function () {
            db.close();
        };

    function getAllContacts(db) {
        const txn = db.transaction('Contacts', "readonly");
        const objectStore = txn.objectStore('Contacts');

        objectStore.openCursor().onsuccess = (event) => {
            let cursor = event.target.result;
            if (cursor) {
                let contact = cursor.value;
                console.log(contact);
                // continue next record
                cursor.continue();
            }
        };

        // close the database connection
        txn.oncomplete = function () {
            db.close();
        };
    }

        let query = store.delete(id);
        
    });
mongo -- "$MONGO_INITDB_DATABASE" << EOF
db.createUser({
    user: "admin",
    pwd: "secret",
    roles:[
        {role: 'readWrite',db:"auth"}
    ]
})
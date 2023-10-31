# mern-ts-0
express api with nextjs frontend and typescript!!

# website
  site:
    # build image from dockerfile
    build: ./site
    #network_mode: host
    container_name: site_container
    restart: always
    # map ports
    ports:
      - 5000:5000
    depends_on:
      - mongo_db
    volumes:
      - ./site:/usr/src/app
      - /usr/src/app/node_modules
    environment:
      PORT: 5000

  # admin
  admin:
    # build image from dockerfile
    build: ./admin
    #network_mode: host
    container_name: admin_container
    restart: always
    # map ports
    ports:
      - 4000:4000
    depends_on:
      - mongo_db
    volumes:
      - ./admin:/usr/src/app
      - /usr/src/app/node_modules
    environment:
      PORT: 4000
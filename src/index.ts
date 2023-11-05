import { AppDataSource } from "./data-source";
import { User } from "./entity/User";
import { Photo } from "./entity/Photo";
import { PhotoMetadata } from "./entity/PhotoMetadata";

AppDataSource.initialize()
  .then(async () => {
    const photo = new Photo();
    photo.name = "jawan";
    photo.description = "This is nice picture";
    photo.filename = "picture";
    photo.isPublished = true;
    photo.views = 350;

    const metadata = new PhotoMetadata();
    metadata.height = 640;
    metadata.width = 480;
    metadata.compressed = true;
    metadata.comment = "Cybershoot";
    metadata.orientation = "Portrait";
    // metadata.photo = photo;

    //github

    // const user = new User();
    // user.firstName = "Timber";
    // user.lastName = "Saw";
    // user.age = 11;
    // user.email = "sahayogtimalsina07@gmail.com";
    // user.hair_color = "grey";
    // user.family_member = ["brother", "sister", "mom", "dad"];

    const metadataRepository = await AppDataSource.getRepository(PhotoMetadata);
    const photoRepository = await AppDataSource.getRepository(Photo);
    // const userRepository = await AppDataSource.getRepository(User);

    metadataRepository.save(metadata);
    photoRepository.save(photo);
    // userRepository.save(user);

    console.log(
      "metadata is saved,and the relation between metadata and photo is created in the database too"
    );
  })
  .catch((error) => console.log(error));

// .catch((error) => console.log(error));

//
//     console.log("hello");
//     console.log("Inserting a new user into the database...");
//

// console.log("Saved a new user with id: " + user.id);

// console.log("Loading users from the database...");
// const users = await AppDataSource.manager.find(User);
// console.log("Loaded users: ", users);

// console.log(
//   "Here you can setup and run express / fastify / any other framework."
// );

// console.log("Photo is saved");

// const savedPhotos = await photoRepository.find();
// console.log("All photos from the db:", savedPhotos);

// const firsphoto = await photoRepository.findOneBy({
//   id: 1,
// });
// console.log("First photo fromt the db", firsphoto);

// console.log("Saved a new user with id: " + photo.id);

// console.log("Loading photos from the database...");
// const photos = await AppDataSource.manager.find(Photo);
// console.log("Loaded photos: ", photos);

// console.log(
//   "Here you can setup and run express / fastify / any other framework."
// );
//

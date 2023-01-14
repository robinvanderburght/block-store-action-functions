const arrayLoop = async ({ collection, iteratorType }, steps) => {
  const json_collection = await JSON.parse(collection);
  const iteratorKey = { number: "asNumber", text: "asText" };

  for (let index = 0; index < json_collection.length; index += 1) {
    await steps({ [iteratorKey[iteratorType]]: json_collection[index], index });
  }
};

export default arrayLoop;

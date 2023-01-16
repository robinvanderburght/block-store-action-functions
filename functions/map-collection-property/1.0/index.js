const mapCollectionProperty = async ({
  collection: { data: collection },
  propName,
}) => {
  return { result: collection.map((item) => item[propName]) };
};

export default mapCollectionProperty;

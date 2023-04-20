const paramsComposer = (query) => {
  const params = {};
  if (query.genres) params["genres"] = query.genres;
  if (query.parent_platforms)
    params["parent_platforms"] = query.parent_platforms;
  return params;
};

export default paramsComposer;

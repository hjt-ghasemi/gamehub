const paramsComposer = (query) => {
  const params = {};
  if (query.genres) params["genres"] = query.genres;
  if (query.ordering) params["ordering"] = query.ordering;
  if (query.search) params["search"] = query.search;
  if (query.parent_platforms)
    params["parent_platforms"] = query.parent_platforms;
  return params;
};

export const cleanState = {
  genres: "",
  ordering: "",
  search: "",
  parent_platforms: "",
};

export default paramsComposer;

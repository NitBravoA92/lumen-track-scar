const Resource = (props: any) => {
  const { authRequired, name, views } = props;

  // get the user authentication status

  /*
    check if views prop exists, for example: 
      views={ [ { route: '/', component: <UserMainPage /> }, { route: '/create', component: <UserCreatePage /> }, ...more] }

      add only the required routes in this array
  */
  if(!views || views.length === 0) {
    // display an error
  }

// add here the logic to check if the user is authenticated or not and if the user can access this resource

  return <>content</>
};

export default Resource;
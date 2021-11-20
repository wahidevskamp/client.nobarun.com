import React from 'react';

const useRecentlyView = () => {
  // console.log(product);
  // useEffect(() => {
  //   useProductById(pid).then((data: any) => {
  //     console.log(data);
  //     if (data) {
  //       setProduct(data);
  //     }
  //     // Recently Viewed Data Store in LocalStorage
  //     // if (Object.keys(data).length > 0) {
  //     //   let recentlyViewed: any[] = JSON.parse(
  //     //     localStorage.getItem('recentlyViewed'),
  //     //   );
  //     //   if (!recentlyViewed) {
  //     //     recentlyViewed = [
  //     //       {
  //     //         id: pid,
  //     //         title: product?.intro?.intro?.productName,
  //     //         image: data?.intro?.featuredImage,
  //     //       },
  //     //     ];
  //     //     localStorage.setItem(
  //     //       'recentlyViewed',
  //     //       JSON.stringify(recentlyViewed),
  //     //     );
  //     //   } else {
  //     //     const isExist = recentlyViewed.some((product) => product.id === pid);
  //     //     if (!isExist) {
  //     //       recentlyViewed.push({
  //     //         id: pid,
  //     //         title: data?.intro?.productName,
  //     //         image: data?.intro?.featuredImage,
  //     //       });
  //     //       localStorage.setItem(
  //     //         'recentlyViewed',
  //     //         JSON.stringify(recentlyViewed),
  //     //       );
  //     //     }
  //     //   }
  //     // }
  //   });
  // }, [pid]);
  // return <div>Hello</div>;
};

export default useRecentlyView;

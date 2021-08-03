import "./App.css";

function Reviews() {
  // membuat data dummy JSON
  const user = [
    {
      id: 1,
      name: "Aeda Stren",
      review: "Rasanya enak dan harganya cukup murah",
      image: "https://images.pexels.com/photos/2380794/pexels-photo-2380794.jpeg?cs=srgb&dl=pexels-kevin-bidwell-2380794.jpg&fm=jpg",
    },
    {
      id: 2,
      name: "Santi Carzola",
      review: "Murah meriah dan enak banget rasanya",
      image: "https://images.pexels.com/photos/1270076/pexels-photo-1270076.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      id: 3,
      name: "Aelita Stone",
      review: "Enak banget dan jarang di temuin dimana-mana",
      image: "https://images.pexels.com/photos/1493111/pexels-photo-1493111.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
  ];

  const listReviews = user.map((itemReview) => (
    <div key={itemReview.id} className="Item">
      <img src={itemReview.image} />
      <div className="User">
        <h3>{itemReview.name}</h3>
        <p>{itemReview.review}</p>
      </div>
    </div>
  ));

  return (
    <div className="Review-box">
      <h2>Reviews</h2>
      {listReviews}
    </div>
  );
}

export default Reviews;

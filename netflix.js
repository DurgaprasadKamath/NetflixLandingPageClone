// Example dictionary of movies
const movies = [
  {
    title: "Lucky Baskhar",
    year: 2024,
    rating: "U/A 13+",
    type: "Movie",
    genres: ["Thrillers"],
    description:
      "A middle-class bank clerk who longs to trade stability for adventure gets more than he bargained for when he unexpectedly becomes a wealthy man.",
  },
  {
    title: "Sector 36",
    year: 2024,
    rating: "U/A 16+",
    type: "Movie",
    genres: ["Action", "Thriller"],
    description:
      "A suspenseful drama unraveling secrets and conflicts in the gritty Sector 36.",
  },
  {
    title: "Maharaja",
    year: 2023,
    rating: "U/A 7+",
    type: "Movie",
    genres: ["Historical", "Drama"],
    description:
      "A barber's most valuable possession is stolen. He seeks help from the police, who at first laugh at his pleas but soon realize what they're really looking for.",
  },
  {
    title: "Amaran",
    year: 2023,
    rating: "U/A 13+",
    type: "Movie",
    genres: ["Action", "Drama"],
    description:
      "Honor, love and sacrifice collide as Major Mukund Varadarajan and his wife, Indhu, navigate an emotional romance amidst his rise within the Indian army.",
  },
  {
    title: "The Great Indian Kapil Show",
    year: 2022,
    rating: "U/A 13+",
    type: "Show",
    genres: ["Comedy", "Entertainment"],
    description:
      "A laughter-packed journey with Kapil and his guests sharing their stories and humor.",
  },
  {
    title: "Devara",
    year: 2024,
    rating: "U/A 7+",
    type: "Movie",
    genres: ["Action", "Drama"],
    description:
      "A mighty sea warrior takes a violent stand against the criminal deeds of his village. Years later, his mild-mannered son walks a path of his own..",
  },
  {
    title: "Bagheera",
    year: 2023,
    rating: "U/A 16+",
    type: "Movie",
    genres: ["Action", "Thriller"],
    description:
      "Dismayed by corruption and violence, a virtuous police officer becomes a masked vigilante to deliver lethal justice to criminals and crooked cops alike.",
  },
  {
    title: "Kalki <br> 2898 AD",
    year: 2025,
    rating: "U/A 13+",
    type: "Movie",
    genres: ["Sci-Fi", "Drama"],
    description:
      "The future of those in the dystopian city of Kasi is altered when the destined arrival of Lord Vishnu's final avatar launches a war against darkness.",
  },
  {
    title: "Article 370",
    year: 2024,
    rating: "U/A 16+",
    type: "Movie",
    genres: ["Drama", "History"],
    description:
      "A gripping tale of political intrigue and historical events surrounding Article 370.",
  },
  {
    title: "RRR",
    year: 2022,
    rating: "U/A 13+",
    type: "Movie",
    genres: ["Action", "Drama", "Historical"],
    description:
      "A revolutionary and a tribal leader unite against British rule in this epic tale of friendship and freedom.",
  },
  {
    title: "Leo",
    year: 2024,
    rating: "U/A 7+",
    type: "Movie",
    genres: ["Action", "Thriller"],
    description:
      "A man with a mysterious past must confront his demons in a high-stakes action thriller.",
  },
  {
    title: "Salaar",
    year: 2024,
    rating: "U/A 16+",
    type: "Movie",
    genres: ["Action", "Thriller"],
    description:
      "A ruthless gangster takes on a powerful enemy, but finds his loyalty and morality being tested.",
  },
  {
    title: "Money Heist",
    year: 2021,
    rating: "U/A 18+",
    type: "Show",
    genres: ["Crime", "Thriller"],
    description:
      "A criminal mastermind orchestrates the biggest heist in history with a group of misfit thieves.",
  },
  {
    title: "The Railway Men",
    year: 2023,
    rating: "U/A 16+",
    type: "Movie",
    genres: ["Drama", "Historical"],
    description:
      "A story of unsung heroes who risked their lives during the Bhopal Gas Tragedy.",
  },
  {
    title: "Kota Factory",
    year: 2019,
    rating: "U/A 13+",
    type: "Show",
    genres: ["Drama", "Comedy"],
    description:
      "A look into the lives of students preparing for IIT exams in Kota.",
  },
  {
    title: "Stranger Things",
    year: 2016,
    rating: "U/A 16+",
    type: "Show",
    genres: ["Sci-Fi", "Horror"],
    description:
      "A group of friends uncover supernatural mysteries in their small town.",
  },
  {
    title: "Ludo",
    year: 2020,
    rating: "U/A 16+",
    type: "Movie",
    genres: ["Drama", "Comedy", "Crime"],
    description:
      "Four seemingly disconnected stories cross paths in unpredictable ways.",
  },
  {
    title: "Srikanth",
    year: 2024,
    rating: "U/A 13+",
    type: "Movie",
    genres: ["Action", "Drama"],
    description:
      "A visually-impaired man overcomes extreme obstacles in education and business in this biopic chronicling the life of industrialist Srikanth Bolla.",
  },
  {
    title: "Fighter",
    year: 2024,
    rating: "U/A 13+",
    type: "Movie",
    genres: ["Action", "Thriller"],
    description:
      "A fearless fighter embarks on a mission to protect his people against invaders.",
  },
  {
    title: "Ala Vaikunthapurramuloo",
    year: 2020,
    rating: "U/A 13+",
    type: "Movie",
    genres: ["Drama", "Family"],
    description:
      "A man born into a middle-class family discovers his true identity and navigates life's challenges.",
  },
  {
    title: "Dunki",
    year: 2023,
    rating: "U/A 13+",
    type: "Movie",
    genres: ["Drama", "Comedy"],
    description:
      "A heartfelt tale about migration and finding one's place in the world.",
  },
  {
    title: "Hi Nanna",
    year: 2024,
    rating: "U/A 13+",
    type: "Movie",
    genres: ["Drama", "Family"],
    description:
      "A moving tale about a father and daughter navigating life's ups and downs.",
  },
  {
    title: "The Buckingham Murders",
    year: 2024,
    rating: "U/A 16+",
    type: "Movie",
    genres: ["Mystery", "Crime"],
    description:
      "A gripping murder mystery set in the picturesque town of Buckingham.",
  },
  {
    title: "Maharaj",
    year: 2023,
    rating: "U/A 7+",
    type: "Movie",
    genres: ["Historical", "Drama"],
    description:
      "An inspiring tale of courage and leadership during times of adversity.",
  },
];

for (let i = 0; i < 6; i++) {
  const movie = movies[i];
  document.getElementById("slider1").innerHTML += `
      <div class="item">
        <!-- Button trigger modal -->
        <button
          id="mov${i + 1}"
          type="button"
          class="button"
          data-bs-toggle="modal"
          data-bs-target="#movie${i + 1}"
        ></button>
        <!-- Modal -->
        <div
          class="modal fade"
          id="movie${i + 1}"
          tabindex="-1"
          aria-labelledby="movie${i + 1}Label"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header" id="mov${i + 1}">
                <button
                  type="button"
                  class="btn-close btn-close-white"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
                <div class="title">${movie.title}</div>
                <div class="shade"></div>
              </div>
              <div class="modal-body">
                <div class="list">
                  <p>
                    <span>${movie.year}</span>&#9702;<span>${movie.rating}</span
                    >&#9702;<span>${movie.type}</span>&#9702;<span
                      >${movie.genres.join(", ")}</span
                    >
                  </p>
                </div>
                <div class="text">
                  ${movie.description}
                </div>
                <div class="bttn">
                  <button data-bs-dismiss="modal" aria-label="Close">
                    Get Started<i
                      class="fa-solid fa-chevron-right"
                    ></i>
                  </button>
                </div>
                <div class="membership">
                  <p>Membership Required</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>`;
}

for (let i = 6; i < 12; i++) {
    const movie = movies[i];
    document.getElementById("slider2").innerHTML += `
        <div class="item">
          <!-- Button trigger modal -->
          <button
            id="mov${i + 1}"
            type="button"
            class="button"
            data-bs-toggle="modal"
            data-bs-target="#movie${i + 1}"
          ></button>
          <!-- Modal -->
          <div
            class="modal fade"
            id="movie${i + 1}"
            tabindex="-1"
            aria-labelledby="movie${i + 1}Label"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-header" id="mov${i + 1}">
                  <button
                    type="button"
                    class="btn-close btn-close-white"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                  <div class="title">${movie.title}</div>
                  <div class="shade"></div>
                </div>
                <div class="modal-body">
                  <div class="list">
                    <p>
                      <span>${movie.year}</span>&#9702;<span>${movie.rating}</span
                      >&#9702;<span>${movie.type}</span>&#9702;<span
                        >${movie.genres.join(", ")}</span
                      >
                    </p>
                  </div>
                  <div class="text">
                    ${movie.description}
                  </div>
                  <div class="bttn">
                    <button data-bs-dismiss="modal" aria-label="Close">
                      Get Started<i
                        class="fa-solid fa-chevron-right"
                      ></i>
                    </button>
                  </div>
                  <div class="membership">
                    <p>Membership Required</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>`;
}
for (let i = 12; i < 18; i++) {
    const movie = movies[i];
    document.getElementById("slider3").innerHTML += `
        <div class="item">
          <!-- Button trigger modal -->
          <button
            id="mov${i + 1}"
            type="button"
            class="button"
            data-bs-toggle="modal"
            data-bs-target="#movie${i + 1}"
          ></button>
          <!-- Modal -->
          <div
            class="modal fade"
            id="movie${i + 1}"
            tabindex="-1"
            aria-labelledby="movie${i + 1}Label"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-header" id="mov${i + 1}">
                  <button
                    type="button"
                    class="btn-close btn-close-white"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                  <div class="title">${movie.title}</div>
                  <div class="shade"></div>
                </div>
                <div class="modal-body">
                  <div class="list">
                    <p>
                      <span>${movie.year}</span>&#9702;<span>${movie.rating}</span
                      >&#9702;<span>${movie.type}</span>&#9702;<span
                        >${movie.genres.join(", ")}</span
                      >
                    </p>
                  </div>
                  <div class="text">
                    ${movie.description}
                  </div>
                  <div class="bttn">
                    <button data-bs-dismiss="modal" aria-label="Close">
                      Get Started<i
                        class="fa-solid fa-chevron-right"
                      ></i>
                    </button>
                  </div>
                  <div class="membership">
                    <p>Membership Required</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>`;
}
for (let i = 18; i < 24; i++) {
    const movie = movies[i];
    document.getElementById("slider4").innerHTML += `
        <div class="item">
          <!-- Button trigger modal -->
          <button
            id="mov${i + 1}"
            type="button"
            class="button"
            data-bs-toggle="modal"
            data-bs-target="#movie${i + 1}"
          ></button>
          <!-- Modal -->
          <div
            class="modal fade"
            id="movie${i + 1}"
            tabindex="-1"
            aria-labelledby="movie${i + 1}Label"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-header" id="mov${i + 1}">
                  <button
                    type="button"
                    class="btn-close btn-close-white"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                  <div class="title">${movie.title}</div>
                  <div class="shade"></div>
                </div>
                <div class="modal-body">
                  <div class="list">
                    <p>
                      <span>${movie.year}</span>&#9702;<span>${movie.rating}</span
                      >&#9702;<span>${movie.type}</span>&#9702;<span
                        >${movie.genres.join(", ")}</span
                      >
                    </p>
                  </div>
                  <div class="text">
                    ${movie.description}
                  </div>
                  <div class="bttn">
                    <button data-bs-dismiss="modal" aria-label="Close">
                      Get Started<i
                        class="fa-solid fa-chevron-right"
                      ></i>
                    </button>
                  </div>
                  <div class="membership">
                    <p>Membership Required</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>`;
}

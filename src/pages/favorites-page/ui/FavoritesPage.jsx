import { Vacancy } from "~entities/vacancy/index.js";
import { List } from "antd";
import { useSelector } from "react-redux";
import { fetchFavorites } from "~entities/favorites/model/selectors/fetch-favorites/fetchFavorites.js";
import { VacancyFavorites } from "~entities/favorites/VacancyFavorites.jsx";

const FavoritesPage = () => {
  const favoriteVacancies = useSelector(fetchFavorites);

  return (
    <List
      dataSource={favoriteVacancies && favoriteVacancies}
      header={<h3>Избранное</h3>}
      itemLayout="vertical"
      bordered
      size={"large"}
      renderItem={(vacancy) => (
        <Vacancy
          key={vacancy.id}
          id={vacancy.id}
          url={vacancy.url}
          creation_date={vacancy.creation_date}
          addresses={vacancy.addresses}
          duty={vacancy.duty}
          salary_max={vacancy.salary_max}
          currency={vacancy.currency}
          salary={vacancy.salary}
          salary_min={vacancy.salary_min}
          job_name={vacancy.job_name}
          company={vacancy.company}
        >
          <VacancyFavorites
            id={vacancy.id}
            url={vacancy.url}
            creation_date={vacancy.creation_date}
            addresses={vacancy.addresses}
            duty={vacancy.duty}
            salary_max={vacancy.salary_max}
            currency={vacancy.currency}
            salary={vacancy.salary}
            salary_min={vacancy.salary_min}
            job_name={vacancy.job_name}
            company={vacancy.company}
          />
        </Vacancy>
      )}
    />
  );
};

export { FavoritesPage };

import format from "date-fns/format";
import Footer from "../components/Footer";
import Header from "../components/header/Header";
import { getSearchresult } from "../utils/api";
import Link from "next/link";
import { SearhResultData } from "../types/app";
import ListingCard from "../components/ListingCard";

type SearchParams = {
  location: string;
  startDate: string;
  endDate: string;
  numOfGuests: string;
}
const SearchResult = async ({
  searchParams: { location, startDate, endDate, numOfGuests }
}: { searchParams: SearchParams }) => {
  let formatedStartDate;
  let formatedEndDate;
  if (startDate && endDate) {
    formatedStartDate = format(new Date(startDate), 'dd MMM yy');
    formatedEndDate = format(new Date(endDate), 'dd MMMM yy');
  }
  const range = `${formatedStartDate} - ${formatedEndDate}`;
  const filters = ['Cancellation Flexibility', 'Type of Place', 'Price', 'Rooms and Beds', 'More Filters']
  const searchResultData: SearhResultData = await getSearchresult();
  
  return (
    <>
      <Header placeholder={`${location} | ${range} | ${numOfGuests} guest`} />
      <main>
        <section className='pt-14'>
          <div className='container'>
            <p className='text-xs'>
              300+ stays - {range} - for {numOfGuests} guests
            </p>
            <h1 className='text-3xl font-semibold mt-2 mb-6'>
              stays in {location}
            </h1>
            <div className='hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap'>
              {filters.map((filter) => (
                <button type='button' className='filter-btn' key={filter}>
                  {filter}
                </button>
              ))}
            </div>
            {searchResultData.map((listing) => (
              <ListingCard key={listing.title} 
              img={listing.img} 
              title={listing.title} 
              location={listing.location}
              total={listing.total}
              star={listing.star}
              description={listing.description}
              price={listing.price}
              />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default SearchResult;
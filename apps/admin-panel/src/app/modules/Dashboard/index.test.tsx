import { render, screen, waitFor } from '@testing-library/react';
import { beforeEach, describe, expect, test, vi } from 'vitest';

import { act } from 'react-dom/test-utils';

import Dashboard from '.';

vi.mock('services/profile', async (importOriginal) => {
  const actual = (await importOriginal()) as any;
  return {
    ...actual,
    profileHooks: {
      ...actual.horseOwnerHooks,
      GetDashBoardDetail: vi.fn().mockReturnValue({
        data: {
          stats: {
            _id: '669a0464e9669c08a5e05574',
            totalDrivers: 3,
            totalAcceptedQuotes: 2,
            totalRequestedQuotes: 21,
            totalCompletedTrips: 3,
          },
          newTrips: {
            trips: [
              {
                _id: '66a37a8cb39bdf8aa2e1a961',
                tripType: 'roundTrip',
                pickUpDate: '2024-07-30T00:00:00.000Z',
                lastPickUpDate: '2024-07-31T00:00:00.000Z',
                pickUp: {
                  address: 'Seattle, WA, USA',
                  city: 'Seattle',
                  state: 'Washington',
                  country: 'United States',
                  pincode: '98154',
                  lat: 47.6061389,
                  lng: -122.3328481,
                },
                dropOff: {
                  address: 'Denver, CO, USA',
                  city: 'Denver',
                  state: 'Colorado',
                  country: 'United States',
                  pincode: '80247',
                  lat: 39.7392358,
                  lng: -104.990251,
                },
                returnDate: '2024-07-31T00:00:00.000Z',
                lastReturnDate: '2024-07-31T00:00:00.000Z',
                returnPickUp: {
                  address: 'Denver, CO, USA',
                  city: 'Denver',
                  state: 'Colorado',
                  country: 'United States',
                  pincode: '80247',
                  lat: 39.7392358,
                  lng: -104.990251,
                },
                returnDropOff: {
                  address: 'Seattle, WA, USA',
                  city: 'Seattle',
                  state: 'Washington',
                  country: 'United States',
                  pincode: '98154',
                  lat: 47.6061389,
                  lng: -122.3328481,
                },
                createdAt: '2024-07-26T10:29:32.898Z',
                name: 'sss',
                isFlexiblePickUpDate: true,
                isFlexibleReturnDate: false,
              },
              {
                _id: '66a352c0e30a52a6061c45f0',
                tripType: 'oneWay',
                pickUpDate: '2024-07-31T00:00:00.000Z',
                lastPickUpDate: '2024-07-31T00:00:00.000Z',
                pickUp: {
                  address: 'Asbury Park, NJ 07712, USA',
                  city: 'Asbury Park',
                  state: 'New Jersey',
                  country: 'United States',
                  pincode: '07712',
                  lat: 40.2203907,
                  lng: -74.0120817,
                },
                dropOff: {
                  address: 'Asbury Park, NJ 07712, USA',
                  city: 'Asbury Park',
                  state: 'New Jersey',
                  country: 'United States',
                  pincode: '07712',
                  lat: 40.2203907,
                  lng: -74.0120817,
                },
                createdAt: '2024-07-26T07:39:44.393Z',
                name: 'estimates one way',
                isFlexiblePickUpDate: false,
                isFlexibleReturnDate: null,
              },
            ],
            totalRecords: 17,
          },
        },
        isSuccess: true,
      }),
    },
  };
});

describe('Trip component', () => {
  beforeEach(() => {
    render(<Dashboard />);
    act(() => {});
  });

  test('should render Trip component UI elements', async () => {
    await waitFor(() => {
      expect(
        screen.getByRole('heading', {
          name: /Requested Shipping Quotes/i,
        })
      ).toBeInTheDocument();

      expect(
        screen.getByRole('heading', {
          name: /Accepted Quotes - Pending Confirmation/i,
        })
      ).toBeInTheDocument();

      expect(
        screen.getByRole('heading', {
          name: /total driver/i,
        })
      ).toBeInTheDocument();

      expect(
        screen.getByRole('columnheader', {
          name: /Total Completed Trips/i,
        })
      ).toBeInTheDocument();

      expect(
        screen.getByRole('columnheader', {
          name: /horse owner/i,
        })
      ).toBeInTheDocument();
    });
  });

  test('should render trip table rows component UI elements', async () => {
    await waitFor(() => {
      expect(
        screen.getByRole('cell', {
          name: /round Trip/i,
        })
      ).toBeInTheDocument();

      expect(
        screen.getByRole('cell', {
          name: /one Way/i,
        })
      ).toBeInTheDocument();
    });
  });
});

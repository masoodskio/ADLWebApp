import { Injectable } from '@angular/core';

export interface Result {
  patientId: string,
  name: string,
  birthDate:  string,
  gender: string,
  providerName: string,
  providerOrganization: string,
  resultId: number,
  drawDate:  string
}

@Injectable({
  providedIn: 'root'
})
export class ResultService {
  results: Result[] = [
    {
        "patientId": "7-20639",
        "name": "REATHA RAY",
        "birthDate": "1969-10-02T00:00:00",
        "gender": "F",
        "providerName": "Dr Ali Mohammed",
        "providerOrganization": "Family Medical Center",
        "resultId": 81544,
        "drawDate": "2023-09-13T12:00:00"
    },
    {
        "patientId": "7-7582",
        "name": "JACQUIESE ROBINSON",
        "birthDate": "1998-06-29T00:00:00",
        "gender": "F",
        "providerName": "Dr Ali Mohammed",
        "providerOrganization": "Family Medical Center",
        "resultId": 81543,
        "drawDate": "2023-09-13T12:00:00"
    },
    {
        "patientId": "7-23806",
        "name": "LARRY D WILLIAMS",
        "birthDate": "1957-05-21T00:00:00",
        "gender": "M",
        "providerName": "Dr Ali Mohammed",
        "providerOrganization": "Family Medical Center",
        "resultId": 81542,
        "drawDate": "2023-09-13T12:00:00"
    },
    {
        "patientId": "7-21484",
        "name": "TERRY MOBLEY",
        "birthDate": "1959-10-06T00:00:00",
        "gender": "M",
        "providerName": "Dr Ali Mohammed",
        "providerOrganization": "Family Medical Center",
        "resultId": 81541,
        "drawDate": "2023-09-13T12:00:00"
    },
    {
        "patientId": "7-25246",
        "name": "DERRICK WILLIAMS",
        "birthDate": "1967-05-05T00:00:00",
        "gender": "M",
        "providerName": "Dr Ali Mohammed",
        "providerOrganization": "Family Medical Center",
        "resultId": 81540,
        "drawDate": "2023-09-13T12:00:00"
    },
    {
        "patientId": "7-21233",
        "name": "ERNEST LEONARD",
        "birthDate": "1960-07-23T00:00:00",
        "gender": "M",
        "providerName": "Dr Ali Mohammed",
        "providerOrganization": "Family Medical Center",
        "resultId": 81539,
        "drawDate": "2023-09-13T12:00:00"
    },
    {
        "patientId": "7-17871",
        "name": "NIKITA JONES",
        "birthDate": "1974-07-05T00:00:00",
        "gender": "F",
        "providerName": "Dr Ali Mohammed",
        "providerOrganization": "Family Medical Center",
        "resultId": 81538,
        "drawDate": "2023-09-13T12:00:00"
    },
    {
        "patientId": "7-20786",
        "name": "SANOVIA PETTY",
        "birthDate": "1973-10-30T00:00:00",
        "gender": "F",
        "providerName": "Dr Ali Mohammed",
        "providerOrganization": "Family Medical Center",
        "resultId": 81537,
        "drawDate": "2023-09-13T12:00:00"
    },
    {
        "patientId": "7-23219",
        "name": "MELVIN ALLEN",
        "birthDate": "1955-05-05T00:00:00",
        "gender": "M",
        "providerName": "Dr Ali Mohammed",
        "providerOrganization": "Family Medical Center",
        "resultId": 81536,
        "drawDate": "2023-09-13T12:16:00"
    },
    {
        "patientId": "7-20722",
        "name": "APRIL JONES",
        "birthDate": "1967-10-22T00:00:00",
        "gender": "F",
        "providerName": "Dr Ali Mohammed",
        "providerOrganization": "Family Medical Center",
        "resultId": 81535,
        "drawDate": "2023-09-12T12:00:00"
    },
    {
        "patientId": "7-25848",
        "name": "BERNARD WILLIAMS",
        "birthDate": "1962-02-19T00:00:00",
        "gender": "M",
        "providerName": "Dr Ali Mohammed",
        "providerOrganization": "Family Medical Center",
        "resultId": 81534,
        "drawDate": "2023-09-12T14:00:00"
    },
    {
        "patientId": "7-24658",
        "name": "KEVIN ESTES",
        "birthDate": "1973-06-16T00:00:00",
        "gender": "M",
        "providerName": "Dr Ali Mohammed",
        "providerOrganization": "Family Medical Center",
        "resultId": 81533,
        "drawDate": "2023-09-12T13:00:00"
    },
    {
        "patientId": "7-20732",
        "name": "SABRINA WILSON",
        "birthDate": "1968-12-29T00:00:00",
        "gender": "F",
        "providerName": "Dr Ali Mohammed",
        "providerOrganization": "Family Medical Center",
        "resultId": 81532,
        "drawDate": "2023-09-12T12:00:00"
    },
    {
        "patientId": "7-25042",
        "name": "BIREL WALKER",
        "birthDate": "1956-09-05T00:00:00",
        "gender": "M",
        "providerName": "Dr Ali Mohammed",
        "providerOrganization": "Family Medical Center",
        "resultId": 81531,
        "drawDate": "2023-09-12T12:00:00"
    },
    {
        "patientId": "24-26782",
        "name": "NUSAYBA YUSUF",
        "birthDate": "2006-04-06T00:00:00",
        "gender": "F",
        "providerName": "FARKHUNDA",
        "providerOrganization": "FARKHUNDA",
        "resultId": 81530,
        "drawDate": "2023-09-14T12:00:00"
    },
    {
        "patientId": "24-26781",
        "name": "KHADIJA AHMED",
        "birthDate": "1981-01-01T00:00:00",
        "gender": "F",
        "providerName": "FARKHUNDA",
        "providerOrganization": "FARKHUNDA",
        "resultId": 81529,
        "drawDate": "2023-09-14T12:00:00"
    },
    {
        "patientId": "24-26780",
        "name": "MARY FOX",
        "birthDate": "1955-05-17T00:00:00",
        "gender": "F",
        "providerName": "FARKHUNDA",
        "providerOrganization": "FARKHUNDA",
        "resultId": 81528,
        "drawDate": "2023-09-14T12:00:00"
    },
    {
        "patientId": "24-26779",
        "name": "GLORIA WASHINGTON",
        "birthDate": "1955-05-17T00:00:00",
        "gender": "F",
        "providerName": "FARKHUNDA",
        "providerOrganization": "FARKHUNDA",
        "resultId": 81527,
        "drawDate": "2023-09-14T12:00:00"
    },
    {
        "patientId": "24-26778",
        "name": "MOHAMMAD MADADGAR",
        "birthDate": "1961-04-01T00:00:00",
        "gender": "M",
        "providerName": "FARKHUNDA",
        "providerOrganization": "FARKHUNDA",
        "resultId": 81526,
        "drawDate": "2023-09-14T12:00:00"
    },
    {
        "patientId": "24-26777",
        "name": "FAINA MADADGAR",
        "birthDate": "1964-09-09T00:00:00",
        "gender": "F",
        "providerName": "FARKHUNDA",
        "providerOrganization": "FARKHUNDA",
        "resultId": 81525,
        "drawDate": "2023-09-14T12:00:00"
    },
    {
        "patientId": "45-26731",
        "name": "GLORIA ANDERSON",
        "birthDate": "1942-01-15T00:00:00",
        "gender": "F",
        "providerName": "PRITH GOOMAR",
        "providerOrganization": "DR.PRITH GOOMAR",
        "resultId": 81524,
        "drawDate": "2023-09-14T12:00:00"
    },
    {
        "patientId": "45-26776",
        "name": "DOROTHY MABE",
        "birthDate": "2023-03-05T00:00:00",
        "gender": "F",
        "providerName": "PRITH GOOMAR",
        "providerOrganization": "DR.PRITH GOOMAR",
        "resultId": 81523,
        "drawDate": "2023-09-14T12:00:00"
    },
    {
        "patientId": "45-26776",
        "name": "DOROTHY MABE",
        "birthDate": "2023-03-05T00:00:00",
        "gender": "F",
        "providerName": "PRITH GOOMAR",
        "providerOrganization": "DR.PRITH GOOMAR",
        "resultId": 81522,
        "drawDate": "2023-09-14T12:00:00"
    },
    {
        "patientId": "37-26775",
        "name": "JOYCE KETT",
        "birthDate": "1938-10-01T00:00:00",
        "gender": "F",
        "providerName": "MARIA MICHELOTTI",
        "providerOrganization": "VISITING MEDICAL DOCTORS  INC",
        "resultId": 81521,
        "drawDate": "2023-09-14T14:55:00"
    },
    {
        "patientId": "37-25747",
        "name": "FRANCINE ALPERT",
        "birthDate": "1941-08-13T00:00:00",
        "gender": "M",
        "providerName": "HEMANT GINDE",
        "providerOrganization": "VISITING MEDICAL DOCTORS  INC",
        "resultId": 81520,
        "drawDate": "2023-09-14T13:32:00"
    },
    {
        "patientId": "61-22537",
        "name": "NANCY ZANDERS",
        "birthDate": "1932-09-29T00:00:00",
        "gender": "F",
        "providerName": "KARIDES MARK",
        "providerOrganization": "NORTH CARE HOME HEALTH",
        "resultId": 81519,
        "drawDate": "2023-09-14T12:30:00"
    },
    {
        "patientId": "50-26768",
        "name": "MOHAMMED FARIS",
        "birthDate": "2003-04-14T00:00:00",
        "gender": "M",
        "providerName": "BASHARATH KHAN",
        "providerOrganization": "HAYAT CLINIC",
        "resultId": 81518,
        "drawDate": "2023-09-14T08:00:00"
    },
    {
        "patientId": "50-26767",
        "name": "SHAKERA TAHSEEN",
        "birthDate": "1971-02-12T00:00:00",
        "gender": "F",
        "providerName": "BASHARATH KHAN",
        "providerOrganization": "HAYAT CLINIC",
        "resultId": 81517,
        "drawDate": "2023-09-14T08:00:00"
    },
    {
        "patientId": "23-26317",
        "name": "RAHEEL HAMID",
        "birthDate": "1971-09-09T00:00:00",
        "gender": "M",
        "providerName": "AMERAH SHAFI",
        "providerOrganization": "Primary Urgent Care",
        "resultId": 81516,
        "drawDate": "2023-09-13T12:00:00"
    },
    {
        "patientId": "3-26766",
        "name": "AYSHA IQBAL",
        "birthDate": "1986-08-24T00:00:00",
        "gender": "F",
        "providerName": "Dr Iqbal Waheeda",
        "providerOrganization": "IQBAL Waheeda",
        "resultId": 81515,
        "drawDate": "2023-09-13T12:00:00"
    },
    {
        "patientId": "29-26764",
        "name": "GERALD HOWARD",
        "birthDate": "1950-03-02T00:00:00",
        "gender": "M",
        "providerName": "NOOR AZIZ",
        "providerOrganization": "R & W MEDICAL LLC",
        "resultId": 81514,
        "drawDate": "2023-09-13T10:45:00"
    },
    {
        "patientId": "29-26763",
        "name": "HEIDI HARFMANN",
        "birthDate": "1958-06-26T00:00:00",
        "gender": "F",
        "providerName": "NOOR AZIZ",
        "providerOrganization": "R & W MEDICAL LLC",
        "resultId": 81513,
        "drawDate": "2023-09-13T11:43:00"
    },
    {
        "patientId": "29-26761",
        "name": "LYNNEA BUSCH",
        "birthDate": "1966-02-01T00:00:00",
        "gender": "F",
        "providerName": "NOOR AZIZ",
        "providerOrganization": "R & W MEDICAL LLC",
        "resultId": 81512,
        "drawDate": "2023-09-13T12:00:00"
    },
    {
        "patientId": "29-26760",
        "name": "MOHAMMAD SHAIKH",
        "birthDate": "1965-08-19T00:00:00",
        "gender": "M",
        "providerName": "NOOR AZIZ",
        "providerOrganization": "R & W MEDICAL LLC",
        "resultId": 81511,
        "drawDate": "2023-09-13T12:36:00"
    },
    {
        "patientId": "29-26759",
        "name": "ALFRED SAYEGH",
        "birthDate": "1941-12-30T00:00:00",
        "gender": "M",
        "providerName": "NOOR AZIZ",
        "providerOrganization": "R & W MEDICAL LLC",
        "resultId": 81510,
        "drawDate": "2023-09-13T11:02:00"
    },
    {
        "patientId": "29-26758",
        "name": "GHAZALA SHAIKH",
        "birthDate": "1967-06-16T00:00:00",
        "gender": "F",
        "providerName": "NOOR AZIZ",
        "providerOrganization": "R & W MEDICAL LLC",
        "resultId": 81509,
        "drawDate": "2023-09-13T12:59:00"
    },
    {
        "patientId": "29-26757",
        "name": "KYLE NAVARRETE",
        "birthDate": "2005-03-29T00:00:00",
        "gender": "M",
        "providerName": "NOOR AZIZ",
        "providerOrganization": "R & W MEDICAL LLC",
        "resultId": 81508,
        "drawDate": "2023-09-13T12:19:00"
    },
    {
        "patientId": "29-26756",
        "name": "CORTNEY RETZIAFF",
        "birthDate": "1993-07-31T00:00:00",
        "gender": "F",
        "providerName": "NOOR AZIZ",
        "providerOrganization": "R & W MEDICAL LLC",
        "resultId": 81507,
        "drawDate": "2023-09-13T17:04:00"
    },
    {
        "patientId": "19-26755",
        "name": "HAROLD WILBURN",
        "birthDate": "1982-12-11T00:00:00",
        "gender": "M",
        "providerName": "BALA KANAGARAJU",
        "providerOrganization": "Highland Community",
        "resultId": 81506,
        "drawDate": "2023-09-13T12:00:00"
    },
    {
        "patientId": "19-26754",
        "name": "BONNIE COVINGTON",
        "birthDate": "1923-12-20T00:00:00",
        "gender": "F",
        "providerName": "BALA KANAGARAJU",
        "providerOrganization": "Highland Community",
        "resultId": 81505,
        "drawDate": "2023-09-13T12:00:00"
    },
    {
        "patientId": "13-26753",
        "name": "JAMES LANE",
        "birthDate": "1955-07-26T00:00:00",
        "gender": "M",
        "providerName": "DR SAADUDDIN SYED",
        "providerOrganization": "S & F Medical Center",
        "resultId": 81504,
        "drawDate": "2023-09-13T12:00:00"
    },
    {
        "patientId": "64-26752",
        "name": "RAQUEL JACOBS",
        "birthDate": "1968-09-26T00:00:00",
        "gender": "F",
        "providerName": "FELICIA CARTER",
        "providerOrganization": "S & T MEDICAL",
        "resultId": 81503,
        "drawDate": "2023-09-13T12:00:00"
    },
    {
        "patientId": "64-26751",
        "name": "ALLEN FOSTER",
        "birthDate": "1961-05-23T00:00:00",
        "gender": "M",
        "providerName": "FELICIA CARTER",
        "providerOrganization": "S & T MEDICAL",
        "resultId": 81502,
        "drawDate": "2023-09-13T12:00:00"
    },
    {
        "patientId": "48-26750",
        "name": "KINH NGUYEN",
        "birthDate": "1934-09-01T00:00:00",
        "gender": "F",
        "providerName": "NINH TRAN",
        "providerOrganization": "WINTHROP CLINIC",
        "resultId": 81501,
        "drawDate": "2023-09-13T12:00:00"
    },
    {
        "patientId": "48-26749",
        "name": "HUNG DANG",
        "birthDate": "1970-09-13T00:00:00",
        "gender": "M",
        "providerName": "EDUARD ZINGER",
        "providerOrganization": "WINTHROP CLINIC",
        "resultId": 81500,
        "drawDate": "2023-09-13T12:00:00"
    },
    {
        "patientId": "7-26748",
        "name": "ROBERT MITCHELL",
        "birthDate": "1944-04-03T00:00:00",
        "gender": "M",
        "providerName": "Dr Ali Mohammed",
        "providerOrganization": "Family Medical Center",
        "resultId": 81499,
        "drawDate": "2023-09-13T12:00:00"
    },
    {
        "patientId": "7-26747",
        "name": "CLIFFORD PERKINS",
        "birthDate": "1961-01-02T00:00:00",
        "gender": "M",
        "providerName": "Dr Ali Mohammed",
        "providerOrganization": "Family Medical Center",
        "resultId": 81498,
        "drawDate": "2023-09-13T12:00:00"
    },
    {
        "patientId": "7-26746",
        "name": "CATHY CHATMAN",
        "birthDate": "1957-05-07T00:00:00",
        "gender": "F",
        "providerName": "Dr Ali Mohammed",
        "providerOrganization": "Family Medical Center",
        "resultId": 81497,
        "drawDate": "2023-09-13T12:00:00"
    },
    {
        "patientId": "7-26745",
        "name": "XAVIER TIDWELL",
        "birthDate": "1981-06-29T00:00:00",
        "gender": "M",
        "providerName": "Dr Ali Mohammed",
        "providerOrganization": "Family Medical Center",
        "resultId": 81496,
        "drawDate": "2023-09-13T12:00:00"
    },
    {
        "patientId": "256-26744",
        "name": "LUTFI SULEMANI",
        "birthDate": "1946-08-10T00:00:00",
        "gender": "M",
        "providerName": "NIDAL HASAN",
        "providerOrganization": "CHICAGO CLINIC",
        "resultId": 81495,
        "drawDate": "2023-09-13T12:00:00"
    }
]
}

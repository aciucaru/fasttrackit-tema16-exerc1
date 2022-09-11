import { Component } from '@angular/core';

// Instructions

// Given a phrase, count the occurrences of each word in that phrase.

// For the purposes of this exercise you can expect that a word will always be one of:

//     A number composed of one or more ASCII digits (ie "0" or "1234") OR
//     A simple word composed of one or more ASCII letters (ie "a" or "they") OR
//     A contraction of two simple words joined by a single apostrophe (ie "it's" or "they're")

// When counting words you can assume the following rules:

//     The count is case insensitive (ie "You", "you", and "YOU" are 3 uses of the same word)
//     The count is unordered; the tests will ignore how words and counts are ordered
//     Other than the apostrophe in a contraction all forms of punctuation are ignored
//     The words can be separated by any form of whitespace (ie "\t", "\n", " ")

// atentie! se foloseste replaceAll() care necesita adugarea optiunii "ES2021.String" in tsconfig.json
// altfel replaceAll() nu va fi recunoscuta, este o metoda prea noua


// clasa ce decrie un element numarabil
// elementul are o valoare si un numar ce stocheaza de cate ori apare
class CountableElement<T>
{
    value?: T; // valoarea efectiva a elementului
    count: number = 0; // de cate ori apare (este numarat) elementul
    wasCounted: boolean = false; // daca elementul a fost numarat deja sau nu
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent
{
    title = 'curs16-tema1-word-count';
    countedWords: Array<CountableElement<string>> = [];

    countWords(inputString: string): void
    {
        // delimitatorii dupa care se face despartirea si numarartea cuvintelor
        // prin ajustarea acestui sir, se pot modifica delimitatorii dupa care se despart cuvintele
        // adica algoritmul este flexibil, permite schimbarea delimitatorilor
        let regexDelimiters: RegExp[] =
            [
                new RegExp('\s', 'g'),
                new RegExp('\,', 'g'),
                new RegExp('\.', 'g'),
                new RegExp('\;', 'g'),
                new RegExp('\-', 'g'),
                new RegExp('\?')
            ];

        // intr-un final, toti delimitatorii vor fi inlocuiti cu un delimitator standard, ca despartirea
        // dupa delimitator sa fie mai usoara
        let standardDelimiter: string = '#';
        let finalString: string = inputString;
        let splittedWords: Array<string>;

        // replaceAll() nu functioneaza cum trebuie, de ce?
        // fiecare delimitator ar trebui inlocuit cu unul standard
        // aceasta metoda nu functioneaza cum trebuie, de ce?
        // in tsconfig s-au pus 'target' si 'module' es2022
        for(let regexDelimiter of regexDelimiters)
        {
            finalString = finalString.replaceAll(regexDelimiter, standardDelimiter);
        }

        console.log(finalString);

        /* dupa ce s-au inlocuit toti delimitatorii cu un singur delimitator (standardDelimiter),
            acum este mai usor sa se desparta string-ul in cuvinte, caci este doar un singur delimitator */
        // splittedWords = finalString.split(standardDelimiter); // se face despartirea efectiva in cuvinte

        /* o data ce cuvintele au fost despartite, acum trebuie numarata frecventa lor (de cate
            ori apare fiecare cuvant); de aceea cuvintele vor transformate in elemente numarabile,
            adica in obiecte de tip CountableElement<string> */
    }
}

//interface with classes:

interface WHO{
    covidVaccination(): void;
};

interface USMedical extends WHO{
    minFee: number;
    physio(): void;
    cardio(): void;
    emergency(): void;
};

interface UKMedical extends WHO{
    ENT(): void;
    oncology(): void; 
    emergency(): void;
};

interface INDMedical extends WHO{
    pediatrics(): void;
    dental(): void;
    gastro(): void;
    emergency(): void;
};

class Fortis implements USMedical, UKMedical, INDMedical{

    minFee: number = 10;

    covidVaccination(): void {
        console.log('FH - covidVaccination');
    };

    physio(): void{
        console.log('FH - physio');
    };

    cardio(): void{
        console.log('FH - cardio');
    };

    ENT(): void{
        console.log('FH - ENT');
    };

    oncology(): void{
        console.log('FH - oncology');
    };

    pediatrics(): void{
        console.log('FH - pediatrics');
    };

    dental(): void{
        console.log('FH - dental');
    };

    gastro(): void {
        console.log('FH - gastro');
    };

    emergency(): void {
        console.log('FH - emergency');
    }

    //individual:
    medicalTest(): void{
        console.log('FH - medicalTest');
    };

};

let fortisHospital: Fortis = new Fortis();
fortisHospital.cardio();
fortisHospital.emergency();
fortisHospital.medicalTest();
fortisHospital.pediatrics();
fortisHospital.oncology();
fortisHospital.covidVaccination();

//Top casting: is possible
let usm: USMedical = new Fortis();
usm.cardio();
usm.physio();
usm.emergency();

let ukm: UKMedical = new Fortis();
ukm.ENT();
ukm.oncology();
ukm.emergency();

let indm: INDMedical  = new Fortis();
indm.dental();
indm.gastro();
indm.pediatrics();
indm.emergency();

/*
class -- class : extends keyword
class -- interface: implements keyword
interface -- interface: extends keyword
*/

export{};

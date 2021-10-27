import axios from "axios";

export function downloadPetImage(downloadPets : IPet[]){
    downloadPets.filter(pet => pet.shouldDownload).forEach(
        pet => {
            axios.get(pet.url, {
                responseType: "blob"
            })
            .then((response) => {
              // Create blob link to download
              const url = window.URL.createObjectURL(
                new Blob([response.data], {
                    type: response.headers['content-type']
                })
              );
              const link = document.createElement('a');
              link.href = url;
              link.setAttribute('download', `${pet.title}.png`);
          
              document.body.appendChild(link);
              link.click();
              link.parentNode!.removeChild(link);
            });
        }
    )
}
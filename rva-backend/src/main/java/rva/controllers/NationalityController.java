package rva.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import rva.jpa.Nationality;
import rva.repositories.NationalityRepository;
import rva.repositories.PlayerRepository;

import javax.transaction.Transactional;
import java.util.List;

@CrossOrigin
@RestController
public class NationalityController {

    @Autowired
    private NationalityRepository nationalityRepository;

    @Autowired
    private PlayerRepository playerRepository;

    @GetMapping("nationalities/all")
    public List<Nationality> getNationalitiesAll() {
        return nationalityRepository.findAll();
    }

    @GetMapping("nationalities/{id}")
    public Nationality getNationalityById(@PathVariable("id") Integer id) {
        return nationalityRepository.getById(id);
    }

    @GetMapping("nationalities/search/{name}")
    public List<Nationality> getNationalitiesByName(@PathVariable("name") String name) {
        return nationalityRepository.findByNameContainingIgnoreCase(name);
    }

    @PostMapping("nationalities/insert")
    public ResponseEntity<Nationality> insertNationality(@RequestBody Nationality nationality) {
        if (nationalityRepository.existsById(nationality.getId())) {
            return new ResponseEntity<Nationality>(HttpStatus.CONFLICT);
        }
        nationalityRepository.save(nationality);
        return new ResponseEntity<Nationality>(HttpStatus.OK);
    }

    @PutMapping("nationalities/update")
    public ResponseEntity<Nationality> updateNationality(@RequestBody Nationality nationality) {
        if (!nationalityRepository.existsById(nationality.getId())) {
            return new ResponseEntity<Nationality>(HttpStatus.NO_CONTENT);
        }
        nationalityRepository.save(nationality);
        return new ResponseEntity<Nationality>(HttpStatus.OK);
    }

    @Transactional
    @DeleteMapping("nationalities/{id}/delete")
    public ResponseEntity<Nationality> deleteNationality(@PathVariable("id") Integer id) {
        if (!nationalityRepository.existsById(id)) {
            return new ResponseEntity<Nationality>(HttpStatus.NO_CONTENT);
        }
        // First delete all players with forwarded nationality.
        playerRepository.deleteAllByNationality_Id(id);
        nationalityRepository.deleteById(id);
        return new ResponseEntity<Nationality>(HttpStatus.OK);
    }
}

package rva.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import rva.jpa.Player;
import rva.repositories.PlayerRepository;

import java.util.List;

@CrossOrigin
@RestController
public class PlayerController {

    @Autowired
    private PlayerRepository playerRepository;

    @GetMapping("players/all")
    public List<Player> getPlayersAll() {
        return playerRepository.findAll();
    }

    @GetMapping("players/{id}")
    public Player getPlayerById(@PathVariable("id") Integer id) {
        return playerRepository.getById(id);
    }

    // Search example: http://localhost:8083/players/search?firstName=Cris&lastName=Ron
    @GetMapping("players/search")
    public List<Player> getPlayersByName(String firstName, String lastName) {
        return playerRepository
                .findByFirstNameContainingAndLastNameContainingIgnoreCase(firstName, lastName);
    }

    @PostMapping("players/insert")
    public ResponseEntity<Player> insertPlayer(@RequestBody Player player) {
        if (playerRepository.existsById(player.getId())) {
            return new ResponseEntity<Player>(HttpStatus.CONFLICT);
        }
        playerRepository.save(player);
        return new ResponseEntity<Player>(HttpStatus.OK);
    }

    @PutMapping("players/update")
    public ResponseEntity<Player> updatePlayer(@RequestBody Player player) {
        if (!playerRepository.existsById(player.getId())) {
            return new ResponseEntity<Player>(HttpStatus.NO_CONTENT);
        }
        playerRepository.save(player);
        return new ResponseEntity<Player>(HttpStatus.OK);
    }

    @DeleteMapping("players/{id}/delete")
    public ResponseEntity<Player> deletePlayer(@PathVariable("id") Integer id) {
        if (!playerRepository.existsById(id)) {
            return new ResponseEntity<Player>(HttpStatus.NO_CONTENT);
        }
        playerRepository.deleteById(id);
        return new ResponseEntity<Player>(HttpStatus.OK);
    }
}

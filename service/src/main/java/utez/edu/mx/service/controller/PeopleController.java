package utez.edu.mx.service.controller;

import org.springframework.web.bind.annotation.*;
import utez.edu.mx.service.model.Person;
import utez.edu.mx.service.repository.PersonRepository;

import java.util.List;

@RestController
@RequestMapping("/people")
@CrossOrigin(origins = "*")
public class PeopleController {

    private final PersonRepository repository;

    public PeopleController(PersonRepository repository) {
        this.repository = repository;
    }

    @GetMapping("")
    public List<Person> getAll() {
        return repository.findAll();
    }

    @PostMapping("")
    public Person save(@RequestBody Person person) {
        return repository.save(person);
    }
}
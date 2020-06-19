import Route from '@ember/routing/route';

export default class ScientistsRoute extends Route {
    model() {
        return ['Albert Einstine', 'Eissac Knewton', 'Author C Clerk', 'Marie Curie'];
    }
}

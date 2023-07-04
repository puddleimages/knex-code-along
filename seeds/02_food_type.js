/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex.schema.raw('TRUNCATE food_type CASCADE')
  await knex('food_type').del()
  await knex('food_type').insert([
    {id: 1, name: 'Barf', description: "it's barf"},
    {id: 2, name: 'Crud', description: "it's just crud"},
    {id: 3, name: 'Grub', description: "This is edible"}
  ]);
};
